import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import './ChatInput.scss';

const ChatInput = () => {
  return (
    <div className='chatInput'>
      <AddCircleOutlineIcon />
      <form>
        <input type='text' placeholder='#Tempへメッセージを送信' />
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
