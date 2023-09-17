import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { db } from '../../firebase';
import './ChatInput.scss';

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>('');
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
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

    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      }
    );
    console.log(docRef);
  };
  return (
    <div className='chatInput'>
      <AddCircleOutlineIcon />
      <form>
        <input
          type='text'
          placeholder='#Tempへメッセージを送信'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
        />
        <button
          type='submit'
          className='chatInputButton'
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            sendMessage(e)
          }
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
  );
};

export default ChatInput;
