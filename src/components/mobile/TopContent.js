import React from 'react';
import ContentText from './ContentText';
import ButtonMobile from './ButtonMobile';
import './TopContent.css';

const TopContent = () => {
  
  return (
    <div className="Top-content">
      <ContentText/>
      <ButtonMobile/>
    </div>
  );
}


export default TopContent;