import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

interface Props {
  localStream: MediaStream;
}

const CameraButton: FC<Props> = ({ localStream }) => {

  const [cameraEnabled, setCameraEnabled] = useState<boolean>(true);

  const handleToggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;

    setCameraEnabled(state => !state);
  };

  return (
    <IconButton style={{ color: '#FFF' }} onClick={handleToggleCamera}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;