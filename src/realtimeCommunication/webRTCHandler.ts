import { IRemoteStream, setLocalStream, setRemoteStreams } from '../store/actions/roomActions';
import store from '../store/store';
import Peer from 'simple-peer';
import { signalPeerData } from './socketConnection';

const onlyAudioConstrains = {
  audio: true,
  video: false,
};

const defaultConstrains = {
  audio: true,
  video: true,
};

export const getLocalStreamPreview = (onlyAudio: boolean = false, callbackFunc: () => void) => {
  const constrains = onlyAudio ? onlyAudioConstrains : defaultConstrains;

  navigator.mediaDevices.getUserMedia(constrains)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((err) =>{
      console.log(err);
      console.log('Cannot get access to local stream');
    });
};

interface IPeers {
  [key: string]: Peer.Instance;
}

export interface ISignalData {
  signal: Peer.SignalData;
  connUserSocketId: string;
}

let peers: IPeers = {};

const getConfiguration = (): RTCConfiguration | undefined => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO: use TURN server credentials
  } else {
    console.warn('Using only STUN server');

    return {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };
  }
};

export const prepareNewPeerConnection = (connUserSocketId: string, isInitiator: boolean) => {
  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log('preparing new peer connection as initiator');
  } else {
    console.log('preparing new peer connection as not initiator');
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream ? localStream : undefined,
  });

  peers[connUserSocketId].on('signal', (data) => {
    const signalData: ISignalData = {
      signal: data,
      connUserSocketId,
    };

    signalPeerData(signalData);
  });

  peers[connUserSocketId].on('stream', (remoteStream) => {
    const extendedRemoteStream: IRemoteStream = {
      remoteStream,
      connUserSocketId,
    }
    addNewRemoteStream(extendedRemoteStream);
  });
};

export const handleSignalingData = (data: ISignalData) => {
  const { connUserSocketId, signal } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

const addNewRemoteStream = (remoteStream: IRemoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const closeAllConnections = () => {
  Object.entries(peers).forEach((mappedObject) => {
    const connUserSocketId = mappedObject[0];

    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();

      delete peers[connUserSocketId];
    }
  });
};

export const handleParticipantLeftRoom = (connUserSocketId: string) => {
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = remoteStreams.filter(stream => stream.connUserSocketId !== connUserSocketId);
  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const switchOutgoingTracks = (stream: MediaStream, audioOnly: boolean) => {
  for (let socketId in peers) {
    for (let peerIndex in peers[socketId].streams[0].getTracks()) {
      const peerTrack = peers[socketId].streams[0].getTracks()[peerIndex];
      for (let streamIndex in stream.getTracks()) {
        const streamTrack = stream.getTracks()[streamIndex];

        if (audioOnly && peerTrack.kind === 'video') {
          peers[socketId].removeTrack(peerTrack, peers[socketId].streams[0]);
          peers[socketId].streams[0].removeTrack(peerTrack);
          break;
        }

        if (!peers[socketId].streams[0].getTracks().some(track => track.kind === 'video') && streamTrack.kind === 'video') {
          peers[socketId].addTrack(streamTrack, peers[socketId].streams[0]);
          peers[socketId].streams[0].addTrack(streamTrack);
          break;
        }

        if (peerTrack.kind === streamTrack.kind) {
          peers[socketId].replaceTrack(peerTrack, streamTrack, peers[socketId].streams[0]);
          break;
        }
      }
    }
  }
};