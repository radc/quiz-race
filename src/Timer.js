// src/Timer.js
import React, { useEffect } from 'react';

function Timer({ timeLeft, setTimeLeft, gameOver }) {
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, gameOver, setTimeLeft]);

  return <div className="timer">Tempo: {timeLeft}s</div>;
}

export default Timer;
