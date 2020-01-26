import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ user }) {
  const { name, avatar, tag, location, stats } = user;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {Object.keys(stats).map((stat, index) => (
          <li className={styles.statsItem} key={index}>
            <span className={styles.label}>{stat}</span>
            <span className={styles.quantity}>{stats[stat]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
  }).isRequired,
};

export default Profile;
