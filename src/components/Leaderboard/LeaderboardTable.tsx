import Table from './LeaderboardTableStyle';

export default function LeaderboardTable() {
  return (
    <Table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th colSpan={3}>Time(Seconds)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={1}>Robinelson</td>
          <td colSpan={3}>30.2</td>
        </tr>
      </tbody>
    </Table>
  );
}
