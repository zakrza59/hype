import React from 'react';
import CoinValue from './CoinValue';
import Percentage from './Percentage';
import './BottomContent.css';

const BottomContent = () => {
  
  return (
    <div className="Bottom-content">
      <CoinValue
        cashValue="2 200"
        currency="PLN"
      />
      <Percentage
        percentageValue="+0,91"
        period='1D'
      />
      <Percentage
        percentageValue="-0,21"
        period='1M'
      />
    </div>
  );
}


export default BottomContent;