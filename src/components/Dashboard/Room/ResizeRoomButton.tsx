import { FC } from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

interface Props {
  isRoomMinimized: boolean;
  handleRoomResize: () => void;
}

const Container = styled('div')({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
});

const ResizeRoomButton: FC<Props> = ({ isRoomMinimized, handleRoomResize }) => {

  return (
    <Container>
      <IconButton style={{ color: '#FFF' }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
      </IconButton>
    </Container>
  );
};

export default ResizeRoomButton;