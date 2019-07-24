import React from 'react';
import styles from './WebsiteHeader.module.css';
import MainNav from './MainNav/MainNav.jsx';

const WebsiteHeader = () => {
  return (
    <div className = {styles.header}>
    	<div className = {styles.title}>
      		<p>Seattle <br /> Technological <br /> University</p>
      	</div>
      	<div className = {styles.navigation}>
          <MainNav />
	  	</div>
    </div>
  )
}

export default WebsiteHeader