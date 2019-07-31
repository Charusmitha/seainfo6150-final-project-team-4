import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from './EnrollLink.module.css';

const EnrollLink = ({ degreeSlug }) => {
  return <Link to={`/enroll/${degreeSlug}`}><button className={styles.enrollLink} type="button">Enroll for the Degree</button></Link>;
};

EnrollLink.propTypes = {
  degreeSlug: PropTypes.string.isRequired
};

export default EnrollLink;
