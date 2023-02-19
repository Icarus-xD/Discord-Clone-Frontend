import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, MouseEvent, FC } from 'react';
import { logout } from '../../shared/utils/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useActions } from '../../../hooks/useActions';

const DropdownMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const audioOnly = useSelector((state: RootState) => state.room.audioOnly);

  const { setAudioOnly } = useActions();

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  };

  return (
    <div>
      <IconButton 
        style={{ color: '#FFF' }}
        onClick={handleMenuOpen}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnlyChange}>
          { audioOnly ? 'Audio Only Enabled' : 'Audio Only Disabled' }
          </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;