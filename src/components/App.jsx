import user from './profile/user';
import { Profile } from './profile/Profile';
import { FriendList } from './friendList/FriendList';
import friends from './friendList/friends';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions';
import { StatisticsComponent } from './statistics/Statistics';
import statisticsData from './statistics/data';
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
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
