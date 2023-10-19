import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className={css.statItem}>Good: {good}</p>
    <p className={css.statItem}>Neutral: {neutral}</p>
    <p className={css.statItem}>Bad: {bad}</p>
    <p className={css.statItem}>Total:{total}</p>
    <p className={css.statItem}>Positive feedback: {positivePercentage} %</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};