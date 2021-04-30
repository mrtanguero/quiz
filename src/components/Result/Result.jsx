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
      <div className="text-info">
        <p>
          <strong>Rezultat:</strong>
        </p>
        <p>
          {timer === 0
            ? 'Vrijeme je isteklo.'
            : `Prestalo vrijeme: ${timer} sekundi.`}
        </p>
        <p>{_.sum(answers)} tačnih odgovora.</p>
        <p>{10 - _.sum(answers)} pogrešnih odgovora / neodgovorenih pitanja.</p>
      </div>
      {/* <p>Želite li da igrate ponovo?</p> */}
      <button onClick={onButtonClick}>PROBAJ PONOVO?</button>
    </div>
  );
}
