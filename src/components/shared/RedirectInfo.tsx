import { FC } from 'react';
import CSS from 'csstype';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

interface Props {
  text: string;
  redirectText: string;
  additionalStyles: CSS.Properties;
  handleRedirect: () => void;
}

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor: 'pointer',
});

const RedirectInfo: FC<Props> = ({ 
  text, redirectText, additionalStyles, handleRedirect 
}) => {
  return (
    <Typography
      variant='subtitle2'
      sx={{ color: '#72767D' }}
      style={additionalStyles ? additionalStyles : {}}
    >
      { text }
      <RedirectText onClick={handleRedirect}>
        {redirectText}
      </RedirectText> 
    </Typography>
  );
};

export default RedirectInfo;