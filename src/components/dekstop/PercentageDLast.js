import React from 'react';
import './PercentageD.css';

const PercentageDLast = (props) => {
  const { percentageValue, period } = props;
  
  return (
    <div className="Percentage-d Last">
        <div className="Border">
          <p>{percentageValue}%</p>
          <p className="Undertext">{period}</p>
        </div>
      </div>
  );
}


export default PercentageDLast;