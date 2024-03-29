import { FC, useRef, useEffect } from 'react';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import MessagesHeader from './MessagesHeader';
import Message from './Message';
import DateSeparator from './DateSeparator';


const Container = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const convertDateToHumanReadable = (date: Date, format: string) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  // @ts-ignore
  return format.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
};

const Messages: FC = () => {

  const { chosenChatDetails, messages } = useSelector((state: RootState) => state.chat);

  return (
    <Container>
      <MessagesHeader name={chosenChatDetails?.name} />
      { messages.map((message, index) => {
        const sameAuthor = index > 0 && 
          messages[index - 1].author._id === message.author._id;
        const sameDay = index > 0 && 
          convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy') === convertDateToHumanReadable(new Date(messages[index - 1].date), 'dd/mm/yy');

        return (
          <div 
            key={message._id}
            style={{
              width: '97%',
            }}
          >
            {
              (!sameDay || index === 0) &&
              <DateSeparator 
                date={convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy')}
              />
            }
            <Message  
            content={message.content}
            username={message.author.username}
            sameAuthor={sameAuthor}
            date={convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy')}
            sameDay={sameDay}
          />
          </div>
        );
      }) }
    </Container>
  );
};

export default Messages;