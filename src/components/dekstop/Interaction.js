import React from 'react';
import oko from '../../images/oko.png';
import okohover from '../../images/okohover.png';
import waga from '../../images/waga.png';
import wagahover from '../../images/wagahover.png';
import './Interaction.css';

const Interaction = () => {

  return (
    <div className="Interaction">
      <div className="Content-button-d">
        <button>INWESTUJ</button>
      </div>
      <div className="Icons">
        <img 
          src={oko} 
          className="Oko-d"
          onMouseOver={e => (e.currentTarget.src = okohover)}
          onMouseOut={e => (e.currentTarget.src = oko)}
          alt="oko"
        />
        <img 
          src={waga} 
          className="Waga-d"
          onMouseOver={e => (e.currentTarget.src = wagahover)}
          onMouseOut={e => (e.currentTarget.src = waga)}
          alt="waga"
        />
      </div>
    </div>
  );
}


export default Interaction;