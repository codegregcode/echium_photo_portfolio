import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getJournals = async () => {
  const q = query(collection(db, 'journals'));
  const querySnapshot = await getDocs(q);

  const journals = [];

  querySnapshot.forEach((j) => {
    const journal = j.data();
    journals.push(journal);
  });
  return journals;
};

export default getJournals;
