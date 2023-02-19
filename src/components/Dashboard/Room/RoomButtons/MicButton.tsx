import { FC, useState } from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

interface Props {
  localStream: MediaStream;
}

const MicButton: FC<Props> = ({ localStream }) => {

  const [micEnabled, setMicEnabled] = useState<boolean>(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;

    setMicEnabled(state => !state);
  };

  return (
    <IconButton style={{ color: '#FFF' }} onClick={handleToggleMic}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;