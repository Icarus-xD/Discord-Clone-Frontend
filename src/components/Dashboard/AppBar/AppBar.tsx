import { FC } from 'react';
import { styled } from '@mui/system';
import DropdownMenu from './DropdownMenu';
import ChosenOptionLabel from './ChosenOptionLabel';

const Container = styled('div')({
  position: 'absolute',
  right: 0,
  top: 0,
  height: '48px',
  borderBottom: '1px solid #000',
  backgroundColor: '#36393F',
  width: 'calc(100% - 326px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
});

const AppBar: FC = () => {
  return (
    <Container>
      <ChosenOptionLabel />
      <DropdownMenu />
    </Container>
  );
};

export default AppBar;