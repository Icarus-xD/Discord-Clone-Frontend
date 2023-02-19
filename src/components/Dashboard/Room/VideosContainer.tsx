import { FC } from 'react';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import Video from './Video';
import { RootState } from '../../../store/store';

const Container = styled('div')({
  height: '85%',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

const VideosContainer: FC = () => {

  const { localStream, remoteStreams, screenSharingStream } = useSelector((state: RootState) => ({
    localStream: state.room.localStream,
    remoteStreams: state.room.remoteStreams,
    screenSharingStream: state.room.screenSharingStream,
  }));

  return (
    <Container>
      <Video stream={screenSharingStream ? screenSharingStream : localStream} isLocalStream />
      {
        remoteStreams.map((stream) => <Video key={stream.remoteStream.id} stream={stream.remoteStream} isLocalStream={false} />)
      }
    </Container>
  );
};

export default VideosContainer;