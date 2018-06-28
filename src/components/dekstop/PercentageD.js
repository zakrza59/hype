import React from 'react';
import './PercentageD.css';

const PercentageD = (props) => {
  const { percentageValue, period } = props;
  
  return (
    <div className="Percentage-d">
      <div className="Border">
        <p>{percentageValue}%</p>
        <p className="Undertext">{period}</p>
      </div>
    </div>
  );
}


export default PercentageD;