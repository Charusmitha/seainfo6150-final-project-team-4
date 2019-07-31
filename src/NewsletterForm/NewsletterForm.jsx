import React, { Component } from 'react';
import styles from './NewsletterForm.module.css';

class NewsletterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
  }

  onSubmit = () => {
    this.setState({
      submitted: true
    });
  }

  render() {
    return this.state.submitted ? (
      <div className={styles.thankYou}>Thank you!</div>
    ) : (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <label>Email ID</label>
        <input type="email" pattern=".+@+.+com" id="emailId" name="Email ID" required/>
        <input type="submit" value="Sign Up" />
      </form>
    )
  }
}

export default NewsletterForm;
