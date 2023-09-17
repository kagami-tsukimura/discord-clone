import './App.scss';
import { useAppSelector } from './app/hooks';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className='App'>
      {user ? (
        <>
          {/* sidebar */}
          <Sidebar />
          {/* chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
