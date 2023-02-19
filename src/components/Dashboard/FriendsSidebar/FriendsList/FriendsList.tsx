import { FC, useEffect, useState } from 'react';
import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

// const DUMMY_FRIENDS = [
//   {
//     id: 1,
//     username: 'Kolyan',
//     isOnline: true,
//   },
//   {
//     id: 2,
//     username: 'Vovan',
//     isOnline: false,
//   },
//   {
//     id: 3,
//     username: 'Antokha',
//     isOnline: false,
//   },
//   {
//     id: 4,
//     username: 'Bazan0v',
//     isOnline: true,
//   },
// ];

const Container = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList: FC = () => {

  const [friendsOnline, setFriendsOnline] = useState<any[]>([]);

  const { friends, onlineUsers } = useSelector((state: RootState) => ({
    friends: state.friends.friends,
    onlineUsers: state.friends.onlineUsers,
  }));

  useEffect(() => {
    const friendsCopy = friends.map(f => ({...f}));

    friendsCopy.forEach(f => {
      const isUserOnline = onlineUsers.find(user => user.userId === f.id);
      f.isOnline = isUserOnline ? true : false;
    });

    setFriendsOnline(friendsCopy);
  }, [friends, onlineUsers]);

  return (
    <Container>
      {
        friendsOnline.map((friend: any) => (
          <FriendsListItem 
            key={friend.id}
            id={friend.id}
            username={friend.username}
            isOnline={friend.isOnline}
          />
        ))
      }
    </Container>
  );
};

export default FriendsList;