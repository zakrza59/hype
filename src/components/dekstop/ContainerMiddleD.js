import React from 'react';
import ContentTextD from './ContentTextD'
import CoinValueD from './CoinValueD'
import PercentageD from './PercentageD'
import PercentageDLast from './PercentageDLast'
import Interaction from './Interaction'

import './ContainerMiddleD.css';

const ContainerMiddleD = () => {
  
  return (
    <div className="Container-middle-d">
      <ContentTextD/>
      <CoinValueD
        cashValue="2 200"
        currency="PLN"
      />
      <PercentageD
        percentageValue="+0,91"
        period='1D'
      />
      <PercentageD
        percentageValue="-0.21"
        period='1M'
      />
      <PercentageD
        percentageValue="-2.29"
        period='3M'
      />
      <PercentageD
        percentageValue="+0.42"
        period='12M'
      />
      <PercentageD
        percentageValue="+0.85"
        period='30M'
      />
      <PercentageDLast
        percentageValue="+1.31"
        period='YTD'
      />
      <Interaction/>
    </div>
  );
}


export default ContainerMiddleD;