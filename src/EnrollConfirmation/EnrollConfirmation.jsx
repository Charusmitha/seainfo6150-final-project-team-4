import React from "react";
import PropTypes from "prop-types";
import styles from './EnrollConfirmation.module.css';

const EnrollConfirmation = ({ form }) => {
  const displayElements = [];
  const degreesChecked = [];
  for (let i = 0; i < form.elements.length-1; i++) {
    const element = form.elements[i];
    if (element.type == "checkbox" && !element.checked) {
      continue;
    }
    else if (element.type == "checkbox" && element.checked)
    {
      degreesChecked.push(<li key={element.value}>{element.value}</li>);
    }

    if(element.type !== "checkbox")
    {
      displayElements.push(
        <div key={element.name}>
          <table className={styles.data}>
                <tr>
                  <td className={styles.label}>{element.name}</td>
                  <td className={styles.description}>{element.value}</td>
                </tr>
          </table>
        </div>
      );
    }    
  }

  displayElements.push(
        <div key="Degrees Of Interest">
          <table className={styles.data}>
                <tr>
                  <td className={styles.label}>Degrees Of Interest</td>
                  <td className={styles.description}>{degreesChecked}</td>
                </tr>
          </table>
        </div>
      );

  return <div className={styles.confirmation}><h1 className={styles.thankYou}>Thank you</h1>{displayElements}</div>;
};

EnrollConfirmation.propTypes = {
  form: PropTypes.object.isRequired
};

export default EnrollConfirmation;
