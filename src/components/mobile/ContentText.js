import React from 'react';
import parasol from '../../images/parasol.png';
import oko from '../../images/oko.png';
import './ContentText.css';

const ContentText = () => {
  
  return (
    <div className="Content-text">
      <p className="Coin-title">Ethereum Classic combined<br/>with Zcash</p>
      <p className="Coin-text">
        <img src={parasol} className="Parasol" alt="parasol"/>
        Ethereum foundation
        <img 
        src={oko} 
        className="Oko"
        alt="oko"
        />
      </p>
    </div>
  );
}


export default ContentText;