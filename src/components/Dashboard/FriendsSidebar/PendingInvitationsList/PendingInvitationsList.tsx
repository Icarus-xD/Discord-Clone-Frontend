import { FC } from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

// const DUMMY_INVITATIONS = [
//   {
//     _id: '1',
//     sender: {
//       username: 'Edik',
//       email: 'dummy@ek.com',
//     },
//   },
//   {
//     _id: '2',
//     sender: {
//       username: 'Armen',
//       email: 'dummy@an.com',
//     },
//   },
// ];

const Container = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const PendingInvitationsList: FC = () => {

  const pendingFriendsInvitations = useSelector((state: RootState) => state.friends.pendingFriendsInvitations);

  return (
    <Container>
      {
        pendingFriendsInvitations.map(invitation => (
          <PendingInvitationsListItem 
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            email={invitation.senderId.email}
          />
        ))
      }
    </Container>
  );
}; 

export default PendingInvitationsList;