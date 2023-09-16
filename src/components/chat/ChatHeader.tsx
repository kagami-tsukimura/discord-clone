import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PushPinIcon from '@mui/icons-material/PushPin';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import './ChatHeader.scss';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          Temp
        </h3>
      </div>
      <div className='chatHeaderRight'>
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className='chatHeaderSearch'>
          <input type='text' placeholder='検索' />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
