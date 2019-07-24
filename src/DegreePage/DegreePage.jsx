import React from "react";
import PropTypes from "prop-types";
import styles from './DegreePage.module.css';
import EnrollLink from "../EnrollLink/EnrollLink";

const DegreePage = ({ degree, schools }) => {
  const thisDegreesSchools = schools.filter(school =>
    degree.schools.includes(school.slug)
  );

  return (
    <div className={styles.degree}>
      <img className={styles.image} src={degree.image} alt={degree.title} />
      <div className={styles.content}>
        <h2 className={styles.degreeTitle}>{degree.title}</h2>
        <p>{degree.short_summary}</p>
        <h4>List of Schools:</h4>
        {thisDegreesSchools.map(school => (
        <div className={styles.schoolList}>
          {school.name}
          <br />
        </div>
        ))}
        {degree.syllabus_pdf_urls != null ? (
        <div>
          <h5>Syllabus:</h5>
          <p>{degree.syllabus_pdf_urls}</p>
          <EnrollLink className={styles.enrolLink} degreeSlug = {degree.slug} />
        </div>  
        ) : (
          <EnrollLink className={styles.enrolLink} degreeSlug = {degree.slug} />
        )}
      </div>
    </div>
  );
};

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
};

export default DegreePage;

// thisDegreesSchools is an array of all the
// schools offering the degree currently being viewed
