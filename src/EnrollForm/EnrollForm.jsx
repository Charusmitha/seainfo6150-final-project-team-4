import React from "react";
import PropTypes from "prop-types";
import styles from './EnrollForm.module.css';

const EnrollForm = ({ onSubmit }) => {
  return (
    <form className={styles.enrollForm} onSubmit={onSubmit}>
      <h1 className={styles.title}>Enroll</h1>

      <div>Full Name: <input type="text" name="Name" /></div>
      <div>Email ID<sup>*</sup>: <input type="email" name="Email ID" required/></div>
      <div>Address: <input type="text" name="Address" /></div>
      <div>City: <input type="text" name="City" /></div>
      <div>State: <input type="text" name="State" /></div>
      <div>Zipcode<sup>*</sup>: <input type="text" name="Zipcode" required/></div>
      <div>Phone number<sup>*</sup>: <input type="text" name="Phone Number" required/></div>
      <div>DOB<sup>*</sup>: <input type="text" name="DOB" required/></div>
      Gender: <select name="Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
      <div>Preferred Pronouns: <input type="text" name="Preferred Pronouns" /></div>
      <div>Degree of Interest: <input type="text" name="Degree of Interest" /></div>
      <input type="submit" value="Submit enrollment" />
    </form>
  );
};

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default EnrollForm;
