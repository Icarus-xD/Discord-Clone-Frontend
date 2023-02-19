import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#5865F2',
});

const AuthBox: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: '#36393F',
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
        }}
      >
        { children }
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;