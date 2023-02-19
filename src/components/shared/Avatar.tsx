import { FC } from 'react';
import { styled } from '@mui/system';

interface Props {
  username: string;
  large?: boolean;
}

const AvatarPreview = styled('div')({
  width: '42px',
  height: '42px',
  backgroundColor: '#5865F2',
  borderRadius: '42px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: '700',
  // marginLeft: '5px',
  color: '#FFF',
});

const Avatar: FC<Props> = ({ username, large = false }) => {

  return (
    <AvatarPreview
      style={large ? { height: '80px', width: '80px' } : {}}
    >
      { username.substring(0, 2) }
    </AvatarPreview>
  );
};

export default Avatar;