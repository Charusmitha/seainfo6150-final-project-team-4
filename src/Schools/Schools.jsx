import React from "react";
import PropTypes from "prop-types";

import Degrees from "../Degrees/Degrees";
import styles from './Schools.module.css';

const Schools = ({ degrees, schools }) => {
  return (
    <div className={styles.schoolList}>
      {schools.map((school, index) => {
        const thisSchoolsDegrees = degrees.filter(degree =>
          degree.schools.includes(school.slug)
        );

        return (
          <div className={styles.schools} key={`${school.slug}`}>
            <h3 className={styles.schoolTitle}>{school.name}</h3>
            <p className={styles.summary}>{school.short_summary}</p>
            <h4 className={styles.degreesOffered}>Degrees Offered:</h4>
            {thisSchoolsDegrees.map(degree => (
              <div className={styles.degreeList} key={`${degree.slug}`}>
                <a href={"/degree/" + `${degree.slug}`}>{degree.title}</a>
                <br />
              </div>
            ))}
            <br />
          </div>
        );
      })}
    </div>
  );
};

Schools.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
};

export default Schools;


