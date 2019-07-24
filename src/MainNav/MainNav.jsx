import React from "react";
import { Link } from "react-router-dom";
import styles from './MainNav.module.css';

const MainNav = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/schools">Schools</Link>
        </li>
        <li>
          <Link to="/degrees">Degrees</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li> 
        <li>
          <Link to="/contact">Directions and Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
