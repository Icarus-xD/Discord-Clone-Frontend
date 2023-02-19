import { FC } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '../../../shared/Avatar';
import OnlineIndicator from './OnlineIndicator';
import { useActions } from '../../../../hooks/useActions';
import { chatTypes } from '../../../../store/actions/chatActions';

interface Props {
  id: number;
  username: string;
  isOnline: boolean;
}

const FriendsListItem: FC<Props> = ({ id, username, isOnline }) => {
  
  const { setChosenChatDetails } = useActions();

  const handleChoseActiveConversation = () => {
    setChosenChatDetails({
      chatDetails: {
        id,
        name: username,
      },
      chatType:  chatTypes.DIRECT,
    });
  };

  return (
    <Button
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: '#000',
        position: 'relative',
      }}
      onClick={handleChoseActiveConversation}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: '7px',
          fontWeight: 700,
          color: '#8E9297',
        }}
        variant='subtitle2'
        align='left'
      >
        { username }
      </Typography>
      { isOnline && <OnlineIndicator /> }
    </Button>
  );
};

export default FriendsListItem;