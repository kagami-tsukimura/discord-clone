import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import { useState } from 'react';
import './ChatInput.scss';

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>('');
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
        <button type='submit' className='chatInputButton'>
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
