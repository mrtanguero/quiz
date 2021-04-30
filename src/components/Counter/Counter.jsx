import React, { useState, useEffect } from 'react';
import { TIME_ALLOWED } from '../../config/config.js';
import './Counter.css';

export default function Counter({ isTimeUp, setIsTimeUp }) {
  const [timer, setTimer] = useState(TIME_ALLOWED);

  useEffect(() => {
    if (timer <= 0) {
      setIsTimeUp(true);
      return;
    }
    const intervalHandle = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [setIsTimeUp, isTimeUp, timer]);

  return (
    <div className="Counter">
      <h2 className={`${timer <= 3 ? 'warning' : ''}`}>{timer}</h2>
    </div>
  );
}
