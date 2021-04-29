import _ from 'lodash';
import React from 'react';
import './Result.css';

export default function Result({ answers }) {
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
        <p>{_.sum(answers)} tačnih odgovora.</p>
        <p>{10 - _.sum(answers)} pogrešnih odgovora / neodgovorenih pitanja.</p>
      </div>
      {/* <p>Želite li da igrate ponovo?</p> */}
      <button onClick={onButtonClick}>Probaj ponovo?</button>
    </div>
  );
}
