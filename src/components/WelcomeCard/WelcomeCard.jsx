import React from 'react';
import './WelcomeCard.css';
import { TIME_ALLOWED } from '../../config/config.js';

export default function WelcomeCard({ setQuestionNumber }) {
  const onButtonClick = () => {
    setQuestionNumber(1);
  };

  return (
    <div className="WelcomeCard">
      <h2>Dobrodošli!</h2>
      <div className="text-info">
        <p>Dobićete 10 pitanja i imate {TIME_ALLOWED} sekundi da odgovorite!</p>
      </div>
      <button onClick={onButtonClick}>ZAPOČNI IGRU</button>
    </div>
  );
}
