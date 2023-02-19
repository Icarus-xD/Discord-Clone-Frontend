import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const ChosenOptionLabel: FC = () => {

  const name = useSelector((state: RootState) => state.chat.chosenChatDetails?.name);

  return (
    <Typography
      sx={{ 
        fontSize: '16px', 
        color: '#FFF',
        fontWeight: 'bold',
      }}
    >
      { `${name ? name : ''}` }
    </Typography>
  );
};

export default ChosenOptionLabel;