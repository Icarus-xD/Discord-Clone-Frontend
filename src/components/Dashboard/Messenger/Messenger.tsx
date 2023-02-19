import { FC } from 'react';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';

const Container = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393F',
  marginTop: '48px',
  display: 'flex',
});

const Messenger: FC = () => {

  const chosenChatDetails = useSelector((state: RootState) => state.chat.chosenChatDetails);

  return (
    <Container>
      { 
        !chosenChatDetails ? 
          <WelcomeMessage /> :
          <MessengerContent chosenChatDetails={chosenChatDetails} />  
      }
    </Container>
  );
};

export default Messenger;