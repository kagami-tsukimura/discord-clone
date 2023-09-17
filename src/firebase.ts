import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ7YPYPxzPqbtjFG6kN7JhD815nxB5G8g',
  authDomain: 'discord-clone-9d6cc.firebaseapp.com',
  projectId: 'discord-clone-9d6cc',
  storageBucket: 'discord-clone-9d6cc.appspot.com',
  messagingSenderId: '344926983972',
  appId: '1:344926983972:web:7bba4cb0446c12966e45b1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
