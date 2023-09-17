import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppSelector } from '../../app/hooks';
import { auth } from '../../firebase';
import './Sidebar.scss';
import SidebarChannel from './SidebarChannel';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className='sidebar'>
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='./discordIcon.png' alt='' />
        </div>
        <div className='serverIcon'>
          <img src='./logo192.png' alt='' />
        </div>
      </div>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h4>tempチャンネル</h4>
            </div>
            <div>
              <AddIcon className='sidebarAddChannel' />
            </div>
          </div>

          <div className='sidebarChannelList'>
            <SidebarChannel />
            <SidebarChannel />
          </div>
          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src={user?.photo} alt='' onClick={() => auth.signOut()} />
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className='sidebarVoice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
