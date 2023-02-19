import { FC, useEffect } from 'react';
import { IChatDetails } from '../../../store/slices/chatSlice';
import { styled } from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { getDirectChatHistory } from '../../../realtimeCommunication/socketConnection';

interface Props {
  chosenChatDetails: IChatDetails;
}

const Container = styled('div')({
  flexGrow: 1,
});

const MessengerContent: FC<Props> = ({ chosenChatDetails }) => {

  useEffect(() => {
    getDirectChatHistory({
      receiverId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  return (
    <Container>
      <Messages />
      <NewMessageInput />
    </Container>
  );
};

export default MessengerContent;