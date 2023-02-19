import { FC } from 'react';
import Button from '@mui/material/Button';
import CSS from 'csstype';

interface Props {
  label: string;
  additionalStyles: CSS.Properties;
  disabled?: boolean;
  onClick: () => void;
}

const CustomPrimaryButton: FC<Props> = ({ 
  label, additionalStyles, disabled = false, onClick 
}) => {

  return (
    <Button
      variant='contained'
      sx={{
        bgcolor: '#5865F2',
        color: '#FFF',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px',
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;