import React from "react";
import PropTypes from "prop-types";
import styles from './Calendar.module.css';

const Calendar = ({ dates }) => {
  return (
    <div className={styles.calendar}>
      {dates.map((date, index) => {
        return (
          <div key={`${date.date}-${index}`}>
            <table className={styles.calendarOfEvents}>
              <tr>
                <td className={styles.date}>{date.date}</td>
                <td className={styles.description}>{date.description}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

Calendar.propTypes = {
  dates: PropTypes.array.isRequired
};

export default Calendar;
