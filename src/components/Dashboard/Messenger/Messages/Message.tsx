import { FC } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography'
import Avatar from '../../../shared/Avatar';

interface Props {
  content: string;
  sameAuthor: boolean;
  username: string,
  date: string;
  sameDay: boolean;
}

const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px',
});

const AvatarContainer = styled('div')({
  width: '70px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const MessageContent = styled('div')({
  color: '#DCDDDE',
});

const SameAuthorMessageContent = styled('div')({
  color: '#DCDDDE',
  width: '97%',
});

const SameAuthorMessageText = styled('span')({
  marginLeft: '70px',
});

const Message: FC<Props> = ({
  content, username, sameAuthor, date, sameDay,
}) => {

  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{ content }</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#FFF',
          }}
        >
          {username}{' '}
          <span
            style={{
              fontSize: '12px',
              color: '#72767D',
            }}
          >
            {date}
          </span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;