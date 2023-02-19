import { FC } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const AlertNotification: FC = () => {

  const { showAlertMessage, alertMessageContent, error } = useSelector((state: RootState) => ({ ...state.alert })); 

  const { closeAlertMessage } = useActions();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity={error ? 'error' : 'info'}>{ alertMessageContent }</Alert>
    </Snackbar>
  );
};

export default AlertNotification;