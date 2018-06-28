import React from 'react';
import TopContent from './TopContent';
import BottomContent from './BottomContent';
import './ContainerRight.css';

const ContainerRight = () => {
  
  return (
    <div className="Container-right">
      <TopContent/>
      <BottomContent/>
    </div>
  );
}


export default ContainerRight;