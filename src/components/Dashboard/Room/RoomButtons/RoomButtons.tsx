import { FC } from 'react';
import { styled } from '@mui/system';
import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';
import CloseRoomButton from './CloseRoomButton';
import CameraButton from './CameraButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

const Container = styled('div')({
  height: '15%',
  width: '100%',
  backgroundColor: '#5865F2',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RoomButtons: FC = () => {

  const { localStream, isUserJoinedWithoutVideo } = useSelector((state: RootState) => ({
    localStream: state.room.localStream as MediaStream,
    isUserJoinedWithoutVideo: state.room.isUserJoinedWithoutVideo,
  }));

  return (
    <Container>
      <ScreenShareButton />
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithoutVideo && <CameraButton localStream={localStream} />}
    </Container>
  );
};

export default RoomButtons;