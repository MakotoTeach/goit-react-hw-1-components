import React from 'react';
import Profile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import stats from '../statisticalData.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
