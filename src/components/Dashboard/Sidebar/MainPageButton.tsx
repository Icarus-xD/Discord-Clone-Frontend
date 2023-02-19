import { FC } from 'react';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';

const MainPageButton: FC = () => {
  return (
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
      }}
    >
      <GroupsIcon />
    </Button>
  );
};

export default MainPageButton;