import { FC } from 'react';
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ActiveRoomButton from './ActiveRoomButton';

const Container = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
});

const Sidebar: FC = () => {

  const { activeRooms, isUserInRoom } = useSelector((state: RootState) => ({
    activeRooms: state.room.activeRooms,
    isUserInRoom: state.room.isUserInRoom,
  }));

  return (
    <Container>
      <MainPageButton />
      <CreateRoomButton isUserInRoom={isUserInRoom} />
      { 
        activeRooms.map((room) => (
          <ActiveRoomButton 
            key={room.roomId}
            roomId={room.roomId}
            creatorUsername={room.creatorUsername}
            amountOfParticipants={room.participants?.length as number}
            isUserInRoom={isUserInRoom}
          />
        )) 
      }
    </Container>
  );
};

export default Sidebar;