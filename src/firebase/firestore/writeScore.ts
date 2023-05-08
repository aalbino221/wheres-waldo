/* eslint-disable @typescript-eslint/no-empty-function */
import app from '../firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const writeScore = async (id: number, name: string, time: number) => {
  const db = getFirestore(app);
  let table: string;
  switch (id) {
    case 2:
      table = 'mall';
      break;
    case 3:
      table = 'ski';
      break;
    default:
      table = 'beach';
      break;
  }
  const scoreCollection = collection(db, 'tables', table, 'score');

  const newScore = {
    name: name,
    time: time,
  };

  try {
    const docRef = await addDoc(scoreCollection, newScore);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default writeScore;
