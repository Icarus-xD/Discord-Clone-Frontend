import { FC } from 'react';
import { Typography } from '@mui/material';

const LoginPageHeader: FC = () => {
  return (
    <>
      <Typography 
        variant='h5'
        sx={{
          color: '#FFF',
        }}
      >
        Welcome Back!
      </Typography>
      <Typography 
        sx={{
          color: '#B9BBBE',
        }}
      >
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginPageHeader;