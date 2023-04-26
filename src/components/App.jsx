import Profile from './Profile/Profile';
import Section from './Statistics/Statistics';
import StatList from './Statistics/StatList';
import FrendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile user={user} />

      <Section title="Upload stats">
        <StatList items={data} />
      </Section>

      <FrendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
