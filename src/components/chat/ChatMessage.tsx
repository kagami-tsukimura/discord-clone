import { Avatar } from '@mui/material';
import './ChatMessage.scss';
const ChatMessage = () => {
  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          Kagami
          <span className='messageTimestamp'>2023/09/17</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
