import { Avatar } from '@mui/material';
import { Timestamp } from 'firebase/firestore';
import { useAppSelector } from '../../app/hooks';
import './ChatMessage.scss';

type Props = {
  message: string;
  timestamp: Timestamp;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const ChatMessage = (props: Props) => {
  const { message, timestamp, user } = props;
  const userProfile = useAppSelector((state) => state.user.user);

  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          {userProfile?.displayName}
          <span className='messageTimestamp'>2023/09/17</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
