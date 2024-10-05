// src/StartScreen.js
import React from 'react';

function StartScreen({ startGame }) {
  return (
    <div className="start-screen">
      <h1>Quiz Race</h1>
      <button onClick={startGame}>Começar</button>
    </div>
  );
}

export default StartScreen;
