import React from 'react';
import PropTypes from 'prop-types';
import StatList from './StatList';
import styles from './Statistics.module.css'

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatList stats={stats} />
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
