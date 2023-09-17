import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const [inputText, setInputText] = useState<string>('');
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const { subDocuments: messages } = useSubCollection('channels', 'messages');

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // channels > messages > メッセージ情報
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      'channels',
      String(channelId),
      'messages'
    );

    await addDoc(collectionRef, {
      timestamp: serverTimestamp(),
      message: inputText,
      user: user,
    });
    setInputText('');
  };

  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className='chatMessage'>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      {/* chatInput */}
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form>
          <input
            type='text'
            placeholder='#Tempへメッセージを送信'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
          />
          <button
            type='submit'
            className='chatInputButton'
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              sendMessage(e);
            }}
          >
            送信
          </button>
        </form>
        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
