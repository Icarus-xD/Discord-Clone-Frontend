import { FC } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography'
import Avatar from '../../../shared/Avatar';

interface Props {
  name?: string;
}

const Container = styled('div')({
  width: '98%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
});

const MessagesHeader: FC<Props> = ({ name = '' }) => {

  return (
    <Container>
      <Avatar large username={name} />
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          color: 'white',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      >
        { name }
      </Typography>
      <Typography
        sx={{
          color: '#B9BBBE',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      >
        This is the beginning of your conversation with {name}
      </Typography>
    </Container>
  );
};

export default MessagesHeader;