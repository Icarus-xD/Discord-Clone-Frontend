import { FC, useState } from 'react';
import { styled } from '@mui/system';
import CSS from 'csstype';
import ResizeRoomButton from './ResizeRoomButton';
import VideosContainer from './VideosContainer';
import RoomButtons from './RoomButtons/RoomButtons';

const Container = styled('div')({
  position: 'absolute',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#202225',
});

const fullScreenRoomStyle: CSS.Properties = {
  width: '100%',
  height: '100vh',
};

const minimizedRoomStyle: CSS.Properties = {
  bottom: '0px',
  right: '0px',
  width: '30%',
  height: '40vh',
};

const Room: FC = () => {
  
  const [isRoomMinimized, setIsRoomMinimized] = useState<boolean>(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(state => !state);
  };

  return (
    <Container style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton 
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
      />
    </Container>
  );
};

export default Room;