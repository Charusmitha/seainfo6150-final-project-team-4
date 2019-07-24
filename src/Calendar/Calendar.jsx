import React from "react";
import PropTypes from "prop-types";
import styles from './Calendar.module.css';

const Calendar = ({ dates }) => {
  return (
    <div>
      {dates.map((date, index) => {
        return (
          <div key={`${date.date}-${index}`}>
            <p>{date.date} --> {date.description}</p>
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
