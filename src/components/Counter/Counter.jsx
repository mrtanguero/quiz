import React, { useEffect, useRef } from 'react';
import './Counter.css';

export default function Counter({ isGameOver, setIsGameOver }) {
  const counterRef = useRef();

  useEffect(() => {
    const timeOutHandle = setTimeout(() => {
      setIsGameOver(true);
    }, 30000);
    const intervalHandle = setInterval(() => {
      if (counterRef.current) {
        counterRef.current.textContent -= 1;
        if (counterRef.current.textContent <= 3) {
          counterRef.current.classList.add('warning');
        }
      }
    }, 1000);
    return () => {
      clearTimeout(timeOutHandle);
      clearInterval(intervalHandle);
    };
  }, [setIsGameOver, counterRef, isGameOver]);

  return (
    <div className="Counter">
      <h2 ref={counterRef}>30</h2>
    </div>
  );
}
