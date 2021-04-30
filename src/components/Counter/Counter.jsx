import React, { useEffect } from 'react';
import './Counter.css';

export default function Counter({
  setIsTimeUp,
  questionNumber,
  setTimer,
  timer,
}) {
  useEffect(() => {
    if (timer <= 0 || questionNumber >= 11) {
      setIsTimeUp(true);
      return;
    }
    const intervalHandle = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [questionNumber, setIsTimeUp, setTimer, timer]);

  return (
    <div className="Counter">
      <h2 className={`${timer <= 3 ? 'warning' : ''}`}>
        {timer < 10 ? '0' : ''}
        {timer}
      </h2>
    </div>
  );
}
