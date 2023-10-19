import React from 'react';
import PropTypes from 'prop-types';
import css from './Notifications.module.css';

export const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};