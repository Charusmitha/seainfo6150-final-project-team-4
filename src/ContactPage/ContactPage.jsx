import React from 'react'
import styles from './ContactPage.module.css';
import NewsletterForm from '../NewsletterForm/NewsletterForm.jsx';

const ContactPage = () => {
  return (
    <div className={styles.contactAndDirections}>
      <h2 className={styles.title}>Campus Map</h2>
      <p className={styles.address}>109 12th Ave, Seattle, WA 98122 &nbsp;&nbsp;| &nbsp;&nbsp; +1.206.747.723</p>
      <img className={styles.image} src="images/campusMap.png" alt="Campus" />
      <br />
      <br />
      <section className={styles.newsletter}>Please sign up for Newsletter</section>
      <NewsletterForm />
    </div>
  )
}

export default ContactPage
