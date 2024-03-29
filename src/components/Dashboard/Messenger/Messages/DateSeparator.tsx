import { FC } from 'react';
import { styled } from '@mui/system';

interface Props {
  date: string;
}

const Separator = styled('div')({
  width: '95%',
  backgroundColor: '#B9BBBE',
  height: '1px',
  position: 'relative',
  marginTop: '20px',
  marginBottom: '10px',
});

const DateLabel = styled('span')({
  backgroundColor: '#36393F',
  position: 'absolute',
  left: '45%',
  top: '10px',
  color: '#B9BBBE',
  padding: '0 5px',
  fontSize: '14px',
});

const DateSeparator: FC<Props> = ({ date }) => {

  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
};

export default DateSeparator;