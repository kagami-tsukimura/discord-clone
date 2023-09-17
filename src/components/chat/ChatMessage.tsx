import { Avatar } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import './ChatMessage.scss';
const ChatMessage = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          {user?.displayName}
          <span className='messageTimestamp'>2023/09/17</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
