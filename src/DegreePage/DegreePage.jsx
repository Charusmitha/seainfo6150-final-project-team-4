import React from "react";
import PropTypes from "prop-types";
import styles from './DegreePage.module.css';
import EnrollLink from "../EnrollLink/EnrollLink";

const DegreePage = ({ degree, schools }) => {
  const thisDegreesSchools = schools.filter(school =>
    degree.schools.includes(school.slug)
  );

  const syllabusList =
    degree.syllabus_pdf_urls &&
    degree.syllabus_pdf_urls.map(url => (
      <li key={url}>
        <a className={styles.syllabusLink} href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </li>
    ))

  return (
    <div className={styles.degree}>
      <div className={styles.content}> 
        <h2 className={styles.degreeTitle}> Degree Program - {degree.title}</h2>
        <p>{degree.short_summary}</p>
        <h4 className={styles.listTitle}>List of Schools</h4>
        {thisDegreesSchools.map(school => (
        <div className={styles.schoolList}>
          {school.name}
        </div>
        ))}
        {degree.syllabus_pdf_urls != null ? (
        <div>
          <h4>Syllabus</h4>
          <ul className={styles.list}>{syllabusList}</ul>
          <br />
          <EnrollLink className={styles.enrolLink} degreeSlug = {degree.slug} />
        </div>  
        ) : (
        <div>
          <br />
          <EnrollLink degreeSlug = {degree.slug} />
        </div>
        )}
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={degree.image} alt={degree.title} />
      </div>
    </div>
  );
};

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
};

export default DegreePage;
