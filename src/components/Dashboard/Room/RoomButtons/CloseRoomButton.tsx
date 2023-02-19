import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as roomHandler from '../../../../realtimeCommunication/roomHandler';
// import { leaveRoom } from '../../../../realtimeCommunication/roomHandler';

const CloseRoomButton: FC = () => {

  const handleLeaveRoom = () => {
    roomHandler.leaveRoom();
  };

  return (
    <IconButton style={{ color: '#FFF' }} onClick={handleLeaveRoom}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;