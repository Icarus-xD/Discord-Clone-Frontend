import { useEffect, FC } from 'react';
import { styled } from '@mui/system';
import Sidebar from './Sidebar/Sidebar';
import FriendsSidebar from './FriendsSidebar/FriendsSidebar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../shared/utils/auth';
import { useActions } from '../../hooks/useActions';
import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection';
import { IUserDetails } from '../../api';
import Room from './Room/Room';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Wrapper = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

const Dashboard: FC = () => {

  const { setUserDetails } = useActions();

  const isUserInRoom = useSelector((state: RootState) => state.room.isUserInRoom);

  useEffect(() => {
    let userDetails: string | null | IUserDetails = localStorage.getItem('user');

    if (!userDetails) {
      logout();
    } else {
      userDetails = JSON.parse(userDetails).userDetails as IUserDetails;
      setUserDetails(userDetails);
      connectWithSocketServer(userDetails);
    }
  }, [setUserDetails]);

  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
      { isUserInRoom && <Room /> }
    </Wrapper>
  );
};

export default Dashboard;