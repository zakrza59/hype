import React from 'react'
import './Percentage.css';

const Percentage = (props) => {
  const { percentageValue, period } = props;

  return (
    <div className="Percentage">
      <p>{percentageValue}%</p>
      <p className="Undertext">{period}</p>
    </div>
  );
}


export default Percentage;