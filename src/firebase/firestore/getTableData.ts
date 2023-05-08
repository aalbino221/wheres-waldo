import app from '../firebaseConfig';
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';

const getTableData = async (id: number) => {
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
  const tableCollection = collection(userRef, 'score');
  const queryData = query(tableCollection, orderBy('time', 'asc'));
  const data = await getDocs(queryData);
  const tableData = data.docs.map((doc) => doc.data());
  return tableData;
};

export default getTableData;
