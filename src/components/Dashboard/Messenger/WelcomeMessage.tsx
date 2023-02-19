import { FC } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const Container = styled('div')({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const WelcomeMessage: FC = () => {

  return (
    <Container>
      <Typography
        variant='h6'
        sx={{ color: 'white' }}
      >
        To start chatting - chose conversation
      </Typography>
    </Container>
  );
};

export default WelcomeMessage;