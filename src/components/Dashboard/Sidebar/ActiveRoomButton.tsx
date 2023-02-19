import { Button, Tooltip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { joinRoom } from '../../../realtimeCommunication/roomHandler';
import Avatar from '../../shared/Avatar';

interface Props {
  roomId: string;
  creatorUsername: string;
  amountOfParticipants: number;
  isUserInRoom: boolean;
}

const ActiveRoomButton: FC<Props> = ({
  roomId, creatorUsername, amountOfParticipants, isUserInRoom
}) => {

  const [roomTitle, setRoomTitle] = useState<string>(`Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`);
  const [activeRoomButtonDisabled, setActiveRoomButtonDisabled] = useState<boolean>(amountOfParticipants > 3);

  useEffect(() => setRoomTitle(`Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`), [creatorUsername, amountOfParticipants]);
  useEffect(() => setActiveRoomButtonDisabled(amountOfParticipants > 3), [amountOfParticipants]);

  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      joinRoom(roomId);
    }
  };

  return (
    <Tooltip title={roomTitle}>
      <div>
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
            textAlign: 'center',
          }}
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
        >
          <Avatar username={creatorUsername} />
        </Button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;