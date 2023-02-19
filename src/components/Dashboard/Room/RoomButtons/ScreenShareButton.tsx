import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { useActions } from '../../../../hooks/useActions';
import { switchOutgoingTracks } from '../../../../realtimeCommunication/webRTCHandler';

const constrains = {
  audio: false,
  video: true,
};

const ScreenShareButton: FC = () => {

  const { localStream, screenSharingStream, isScreenSharingActive, audioOnly } = useSelector((state: RootState) => ({
    localStream: state.room.localStream,
    screenSharingStream: state.room.screenSharingStream,
    isScreenSharingActive: state.room.isScreenSharingActive,
    audioOnly: state.room.audioOnly,
  }));

  const { setScreenSharingStream, setAudioOnly } = useActions();

  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream: MediaStream | null = null;

      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constrains);
      } catch (err) {
        console.log('Error occured when trying to get an access to screen share stream.');
      }

      if (stream) {
        setScreenSharingStream(stream);
        switchOutgoingTracks(stream, audioOnly);
      }
    } else {
      if (localStream) {
        switchOutgoingTracks(localStream, audioOnly);
      }
      screenSharingStream?.getTracks().forEach((track) => track.stop());
      setScreenSharingStream(null);
    }
  };

  return (
    <IconButton style={{ color: '#FFF' }} onClick={handleScreenShareToggle}>
      {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;