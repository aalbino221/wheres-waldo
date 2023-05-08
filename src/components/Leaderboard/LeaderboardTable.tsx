import Table from './LeaderboardTableStyle';
import getTableData from '../../firebase/firestore/getTableData';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../App';

export default function LeaderboardTable() {
  const [tableData, setTableData] = useState<any>([]);

  const { selectedLeaderboard } = useContext(StateContext)[2];

  const fetchTableData = async () => {
    const data = await getTableData(selectedLeaderboard);
    setTableData(data);
  };

  useEffect(() => {
    fetchTableData();
  });
  return (
    <Table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th colSpan={3}>Time(Seconds)</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row: any) => {
          return (
            <tr key={row.name}>
              <td colSpan={1}>{row.name}</td>
              <td colSpan={3}>{(row.time / 1000).toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
