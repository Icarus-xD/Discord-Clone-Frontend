import { FC, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '../../../shared/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { useActions } from '../../../../hooks/useActions';

interface Props {
  id: string;
  username: string;
  email: string;
}

const PendingInvitationsListItem: FC<Props> = ({ 
  id, username, email, 
}) => {

  const { acceptFriendInvitation, rejectFriendInvitation } = useActions();

  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  return (
    <Tooltip
      title={email}
    >
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: '7px',
              fontWeight: 700,
              color: '#8E9297',
              flexGrow: 1,
            }}
            variant='subtitle1'
          >
            { username }
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;