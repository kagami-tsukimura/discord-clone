import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { login, logout } from './feature/userSlice';
import { auth } from './firebase';
import { ErrorFallback } from './utils/ErrorFallBack';

function App() {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='App'>
      {user ? (
        <>
          {/* sidebar */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Sidebar />
          </ErrorBoundary>
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
