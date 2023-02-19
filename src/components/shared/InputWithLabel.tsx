import { FC, ChangeEvent } from 'react';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
});

const Label = styled('p')({
  color: '#B9BBBE',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
});

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid #000',
  borderRadius: '5px',
  color: '#DCDDDE',
  backgroundColor: '#35393F',
  margin: 0,
  fontSize: '16px',
  padding: '0 5px',
});

interface Props {
  value: string;
  setValue: (value: string) => void;
  label: string;
  type: 'text' | 'password';
  placeholder: string;
}

const InputWithLabel: FC<Props> = ({ value, setValue, label, type, placeholder }) => {

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{ label }</Label>
      <Input 
        type={type} 
        value={value}
        placeholder={placeholder}
        onChange={handleValueChange}
      />
    </Wrapper>
  );
};

export default InputWithLabel;