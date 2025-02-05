import React from "react";
import { LiaSnapchatGhost } from "react-icons/lia";
import "./styles.sass";

const AdvantagesCardsBlock = () => {
  return (
    <div className='advantagesCardsBlock'>
      <div className='advantagesCardsContainer'>
        <div className='advantagesCard'>
          <div className='cardIcon'>
            <LiaSnapchatGhost />
          </div>
          <div className='cardTitle'>
            <h3 className='title'>Лучшие учителя в своих сферах</h3>
          </div>
          <div className='carLine'></div>
          <div className='cardText'>
            <p className='text'>The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
        </div>
        <div className='advantagesCard'>
          <div className='cardIcon'>
            <LiaSnapchatGhost />
          </div>
          <div className='cardTitle'>
            <h3 className='title'>Лучшие учителя в своих сферах</h3>
          </div>
          <div className='carLine'></div>
          <div className='cardText'>
            <p className='text'>The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
        </div>
        <div className='advantagesCard'>
          <div className='cardIcon'>
            <LiaSnapchatGhost />
          </div>
          <div className='cardTitle'>
            <h3 className='title'>Лучшие учителя в своих сферах</h3>
          </div>
          <div className='carLine'></div>
          <div className='cardText'>
            <p className='text'>The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesCardsBlock;
