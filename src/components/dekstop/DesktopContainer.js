import React from 'react';
import ContainerLeft from '../ContainerLeft';
import ContainerMiddleD from './ContainerMiddleD';
import ContainerRightD from './ContainerRightD';


import './DesktopContainer.css';

const DesktopContainer = () => {
  
  return (
    <div className="Desktop-container">
      <ContainerLeft/>
      <ContainerMiddleD/>
      <ContainerRightD/>
    </div>
  );
}


export default DesktopContainer;