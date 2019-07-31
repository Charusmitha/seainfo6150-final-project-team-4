import React from 'react';
import styles from './WebsiteFooter.module.css';

const WebsiteFooter = () => {
  return (
    <div className = {styles.footer}>
      109 12th Ave, Seattle, WA 98122 &nbsp;&nbsp;| &nbsp;&nbsp; +1.206.747.723 &nbsp;&nbsp; |  &nbsp;&nbsp;www.seattletu.edu
      <br />
      &copy; 2019, Seattle Technological University
    </div>
  )
}

export default WebsiteFooter