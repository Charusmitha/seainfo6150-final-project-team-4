import React from "react";
import PropTypes from "prop-types";
import styles from './DegreesSorterFilterer.module.css';

const DegreesSorterFilterer = ({ onSort, onFilter, schools }) => {
  return (
    <div className={styles.sortAndFilter}>
      <section className={styles.sort}>
        <select onChange={onSort}>
          <option value="none">Sort By: None</option>
          <option value="AZ">Sort By: A - Z</option>
          <option value="ZA">Sort By: Z - A</option>
        </select>
      </section>
      <section className={styles.filter}>
        <div className={styles.levelFilter}>
          <select name="level" id="level" onChange={onFilter}>
            <option value="none">Filter By Level</option>
            <option value="beginner">Level: Beginner</option>
            <option value="intermediate">Level: Intermediate</option>
            <option value="advanced">Level: Advanced</option>
            <option value="mastery">Level: Mastery</option>
          </select>
        </div>
        <div className={styles.schoolFilter}>
          <select name="school" id="school" onChange={onFilter}>
            <option value="none">Filter By School</option>

            {schools.map((school, index) => (
              <option key={school.slug} value={school.slug}>
                School of {school.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
};

DegreesSorterFilterer.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  schools: PropTypes.array.isRequired
};

export default DegreesSorterFilterer;
