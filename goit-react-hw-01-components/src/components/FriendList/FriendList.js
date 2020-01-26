import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({id, isOnline, avatar, name }) => (
        <li key={id} className={styles.item}>
          <span
            className={isOnline ? styles.online : styles.offline}
          ></span>
          <img className={styles.avatar} src={avatar} alt="" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
