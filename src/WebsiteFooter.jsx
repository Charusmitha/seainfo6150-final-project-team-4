import React from 'react';
import styles from './WebsiteFooter.module.css';

const WebsiteFooter = () => {
  return (
    <div className = {styles.footer}>
      <p className={styles.addressAndContact}>Address | Contact</p>
      <p className={styles.copyright}>&copy; 2019, Seattle Technological University</p> 	
    </div>
  )
}

export default WebsiteFooter