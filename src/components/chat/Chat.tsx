import './Chat.scss';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
const Chat = () => {
  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader />
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
