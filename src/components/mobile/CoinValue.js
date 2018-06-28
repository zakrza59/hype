import React from 'react';
import './CoinValue.css';

const CoinValue = (props) => {
  const { cashValue, currency } = props;
  return (
    <div className="Coin-value">
      <p className='Cash'>{cashValue} <span className="Exchange">{currency}</span></p>
      <p className="Undertext">Wartość</p>
    </div>
  );
}


export default CoinValue;