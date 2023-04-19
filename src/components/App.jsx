import user from '../data/user.json';
import { Profile } from './profile/Profile';
import { FriendList } from './friendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { StatisticsComponent } from './statistics/Statistics';
import statisticsData from '../data/data.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',

        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsComponent title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
