import { FC } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

interface Props {
  disabled: boolean
  acceptInvitationHandler: () => void;
  rejectInvitationHandler: () => void;
}

const InvitationDecisionButtons: FC<Props> = ({
  disabled, acceptInvitationHandler, rejectInvitationHandler
}) => {

  return (
    <Box
      sx={{ display: 'flex' }}
    >
      <IconButton 
        style={{ color: '#FFF' }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton 
        style={{ color: '#FFF' }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;