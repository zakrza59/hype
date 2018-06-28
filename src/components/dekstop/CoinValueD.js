import React from 'react';
import './CoinValueD.css';

const CoinValueD = (props) => {
  const { cashValue, currency } = props;
  
  return (
    <div className="Coin-value-d">
          <div className="Border">
            <p className='Cash'>{cashValue} <span className="Exchange">{currency}</span></p>
            <p className="Undertext">Wartość</p>
          </div>
        </div>
  );
}


export default CoinValueD;