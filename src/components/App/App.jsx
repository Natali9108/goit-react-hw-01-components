import { Profile } from '../Profile/Profile';
import { Section } from '../Statistics/Statistics';
import { StatList } from '../Statistics/StatList';
import { FrendList } from '../FriendList/FriendsList';
import { TransactionHistory } from '../Transactions/TransactionHistory';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Section title="Upload stats">
        <StatList items={data} />
      </Section>

      <FrendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
