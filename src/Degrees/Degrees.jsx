import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Degrees.module.css';

const Degrees = ({ degrees }) => {
  return (
    <div className={styles.degreeList}>
      {degrees.map((degree, index) => {
        return (
          <div key={`${degree.slug}`}>
            <img src={degree.image} alt={degree.title} />
            <a href={"/degree/" + `${degree.slug}`}>{degree.title}</a>
          </div>
        );
      })}
    </div>
  );
};

Degrees.propTypes = {
  degrees: PropTypes.array.isRequired
};

export default Degrees;
