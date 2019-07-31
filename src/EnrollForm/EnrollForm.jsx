import React from "react";
import PropTypes from "prop-types";
import styles from './EnrollForm.module.css';

const EnrollForm = ({ degrees, onSubmit, currentDegree }) => {

  return (
    <form className={styles.enrollForm} onSubmit={onSubmit}>
      <h2 className={styles.title}>Enroll</h2>
      <div>
        <label for="fullname">Full Name</label>
        <input type="text" id="fullname" name="Name" required/>
      </div>
      <div>
        <label for="emailId">Email ID</label>
        <input type="email" pattern=".+@+.+com" id="emailId" name="Email ID" placeholder="Please provide your email in the format foo@abc.com" required/>
      </div>
      <div>
        <label for="address">Address</label>
        <input type="text" id="address" name="Address" required/>
      </div>
      <div>
        <label for="city">City</label>
        <input type="text" id="city" name="State" required/>
      </div>
      <div>
        <label for="state">State</label>
        <input type="text" id="state" name="State" required/>
      </div>
      <div>
        <label for="zipcode">Zipcode</label>
        <input type="text" id="zipcode" name="Zipcode" pattern="[0-9]{5}" placeholder="Please provide 5 digit zipcode in the format XXXXX" required/>
      </div>
      <div>
        <label for="phone">Phone Number</label>
        <input type="text" id="phone" name="Phone Number" oninvalid="this.setCustomValidity('Not Valid')" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Please provide 10 digit phone number in the format XXX-XXX-XXXX" required/>
      </div>
      <div>
        <label for="dob">DOB</label>
        <input type="date" id="dob" name="DOB" required/>
      </div>
      <div>
        <label for="gender">Gender</label> <select id="gender" name="Gender">
                                              <option value="male">Male</option>
                                              <option value="female">Female</option>
                                              <option value="other">Other</option>
                                              <option value="prefer not to say">Prefer not to say</option>
                                            </select>
      </div>
      <div>
        <label for="pronouns">Preferred Pronouns</label> <select id="gender" name="Gender">
                                                          <option value="he/him">He/Him</option>
                                                          <option value="she/her">She/Her</option>
                                                          <option value="they/them">They/Them</option>
                                                          <option value="other">Other</option>
                                                          <option value="prefer not to say">Prefer not to say</option>
                                                        </select>
      </div>
      <div>
        <label>Degrees Of Interest</label>
        <div className={styles.checkbox}>
            {degrees.map((degree) => {
              return (
                <div className="degreeList">
                  <input type="checkbox" name="Degrees of Interest" value={degree.title} defaultChecked={degree.title===currentDegree}/>{degree.title}
                </div>
              );
            })}
          </div>
      </div>
      <div>
        <input type="submit" value="Submit enrollment" />
      </div>
    </form>
  );
};

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default EnrollForm;
