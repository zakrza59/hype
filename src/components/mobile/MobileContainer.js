import React from 'react';
import ContainerLeft from '../ContainerLeft';
import ContainerRight from './ContainerRight';
import './MobileContainer.css';

const MobileContainer = () => {
  
  return (
    <div className="Mobile-container">
      <ContainerLeft/>
      <ContainerRight/>
    </div>
  );
}


export default MobileContainer;