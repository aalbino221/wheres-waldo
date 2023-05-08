import app from '../firebaseConfig';
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  query,
} from 'firebase/firestore';

const getCoordinates = async (id: number) => {
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
  const db = getFirestore(app);
  const userRef = doc(db, 'tables', table);
  const tableCollection = collection(userRef, 'characters');
  const queryData = query(tableCollection);
  const data = await getDocs(queryData);
  const charactersData = data.docs.map((doc) => doc.data());
  return charactersData;
};

export default getCoordinates;
