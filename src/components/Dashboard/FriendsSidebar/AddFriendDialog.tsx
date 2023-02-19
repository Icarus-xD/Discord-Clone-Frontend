import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { FC, useEffect, useState } from 'react';
import { validateEmail } from '../../shared/utils/validators';
import Typography from '@mui/material/Typography';
import InputWithLabel from '../../shared/InputWithLabel';
import CustomPrimaryButton from '../../shared/CustomPrimaryButton';
import { useActions } from '../../../hooks/useActions';

interface Props {
  isDialogOpen: boolean,
  closeDialogHandler: () => void,
  // sendFriendInvitation?: () => void,
}

const AddFriendDialog: FC<Props> = ({ 
  isDialogOpen, closeDialogHandler,
}) => {

  const { sendFriendInvitation } = useActions();

  const [email, setEmail] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  const handleSendInvitation = () => {
    sendFriendInvitation({
      targetEmail: email, 
    });
    handleCloseDialog();
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  };

  return (
    <Dialog 
      open={isDialogOpen}
      onClose={handleCloseDialog}
    >
      <DialogTitle>
        <Typography>Invite a Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>Enter e-mail address of friend which you would like to invite.</Typography>
        </DialogContentText>
        <InputWithLabel
          label='E-mail'
          type='text'
          placeholder='Enter e-mail address'
          value={email}
          setValue={setEmail}
        />
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
          label='Send'
          disabled={!isFormValid}
          additionalStyles={{
            marginLeft: '15px',
            marginRight: '15px',
            marginBottom: '10px',
          }}
          onClick={handleSendInvitation}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddFriendDialog;