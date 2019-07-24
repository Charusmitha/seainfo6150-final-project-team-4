import React from 'react';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <p className={styles.errorDesc}>404 PAGE NOT FOUND</p>
      <p>The page you are looking for is unavailable.</p>
    </div>
  )
}

export default ErrorPage
