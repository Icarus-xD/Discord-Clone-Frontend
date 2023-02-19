import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { sendDirectMessage } from '../../../realtimeCommunication/socketConnection';

const Container = styled('div')({
  height: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Input = styled('input')({
  backgroundColor: '#2F3136',
  width: '98%',
  height: '44px',
  color: '#FFF',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0 10px',
});

const NewMessageInput: FC = () => {

  const [message, setMessage] = useState<string>('');

  const chosenChatDetails = useSelector((state: RootState) => state.chat.chosenChatDetails);

  const handleMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event: KeyboardEvent<HTMLInputElement>) => {   
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length) {
      sendDirectMessage({
        receiverId: chosenChatDetails?.id as string,
        content: message,
      });
      setMessage('');
    }
  };

  return (
    <Container>
      <Input
        value={message}
        placeholder={`Write message to ${chosenChatDetails?.name}`}
        onChange={handleMessage}
        onKeyDown={handleKeyPressed}
      />
    </Container>
  );
};

export default NewMessageInput;