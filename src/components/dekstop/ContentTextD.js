import React from 'react';
import parasol from '../../images/parasol.png';
import './ContentTextD.css';

const ContentTextD = () => {
  
  return (
    <div className="Content-text-d">
      <p className="Coin-title-d">Ethereum Classic combined<br/>with Zcash</p>
      <p className="Coin-text-d">
        <img src={parasol} className="Parasol" alt="parasol"/>Ethereum foundation
      </p>
      <p className="Coin-text-d">
        <span className="Circle"></span>Altcoins - highest growth
      </p>
    </div>
  );
}


export default ContentTextD;