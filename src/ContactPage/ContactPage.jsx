import React from 'react'
import styles from './ContactPage.module.css';
import NewsletterForm from '../NewsletterForm/NewsletterForm.jsx';

const ContactPage = () => {
  return (
    <div className={styles.contactAndDirections}>
      <p>Directions:</p>
      <p>Contact:</p>
      <br />
      Sign up For Newsletter
      <NewsletterForm />
    </div>
  )
}

export default ContactPage
