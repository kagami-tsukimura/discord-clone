import { useAppSelector } from '../../app/hooks';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);

  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className='chatMessage'>
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
