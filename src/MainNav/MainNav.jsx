import React from "react";
import { Link } from "react-router-dom";
import styles from './MainNav.module.css';

const MainNav = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link className={styles.homeLink} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.aboutLink} to="/about">About</Link>
        </li>
        <li>
          <Link className={styles.schoolsLink} to="/schools">Schools</Link>
        </li>
        <li>
          <Link className={styles.degreesLink} to="/degrees">Degrees</Link>
        </li>
        <li>
          <Link className={styles.calendarLink} to="/calendar">Calendar</Link>
        </li> 
        <li>
          <Link className={styles.contactLink} to="/contact">Contact and More</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
