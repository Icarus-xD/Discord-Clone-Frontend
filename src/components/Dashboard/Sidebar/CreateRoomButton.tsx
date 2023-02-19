import { FC } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { createNewRoom } from '../../../realtimeCommunication/roomHandler';

interface Props {
  isUserInRoom: boolean;
}

const CreateRoomButton: FC<Props> = ({ isUserInRoom }) => {

  const createNewRoomHandler = () => {
    createNewRoom();
  };

  return (
    <Button
      style={{
        width: '48px',
        minWidth: 0,
        height: '48px',
        borderRadius: '16px',
        padding: 0,
        margin: 0,
        marginTop: '10px',
        color: '#FFF',
        backgroundColor: '#5865F2',
      }}
      disabled={isUserInRoom}
      onClick={createNewRoomHandler}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;