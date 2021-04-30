import _ from 'lodash';
import React from 'react';
import './Result.css';

export default function Result({ answers, timer }) {
  const onButtonClick = () => {
    window.location.reload();
  };

  return (
    <div className="Result">
      <h2>Igra je završena!</h2>
      <p className="time-info">
        {timer === 0
          ? 'Vrijeme je isteklo.'
          : `Preostalo vrijeme: ${timer} sekundi.`}
      </p>
      <div className="score-info">
        <p style={{ marginBottom: '.5rem' }}>
          <strong>Rezultat:</strong>
        </p>
        <p>{_.sum(answers)} tačnih odgovora.</p>
        <p>{10 - _.sum(answers)} pogrešnih odgovora / neodgovorenih pitanja.</p>
      </div>
      {/* <p>Želite li da igrate ponovo?</p> */}
      <button onClick={onButtonClick}>PROBAJ PONOVO</button>
    </div>
  );
}
