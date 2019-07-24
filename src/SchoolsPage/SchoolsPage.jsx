import React from 'react'
import PropTypes from 'prop-types'
import Schools from "../Schools/Schools";
import styles from './SchoolsPage.module.css';

const SchoolsPage = ({ degrees, schools }) => {
  return (
    <div className={styles.schools}>
      <h2 className={styles.title}>Schools</h2>
      <Schools degrees={degrees} schools={schools} />
    </div>
  )
}

SchoolsPage.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
}

export default SchoolsPage
