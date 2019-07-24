import React from "react";
import PropTypes from "prop-types";
import styles from './EnrollConfirmation.module.css';

const EnrollConfirmation = ({ form }) => {
  const displayElements = [];
  for (let i = 0; i < form.elements.length-1; i++) {
    const element = form.elements[i];

    displayElements.push(
      <div key={`enroll-${i}`}>
        {element.name}: {element.value}
      </div>
    );
  }

  return <div className={styles.confirmation}><h1>Thank you</h1>{displayElements}</div>;
};

EnrollConfirmation.propTypes = {
  form: PropTypes.object.isRequired
};

export default EnrollConfirmation;
