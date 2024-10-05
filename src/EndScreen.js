// src/EndScreen.js
import React from 'react';

function EndScreen({ score, startGame }) {
  return (
    <div className="end-screen">
      <h1>Fim de Jogo!</h1>
      <p>Você acertou {score} perguntas.</p>
      <button onClick={startGame}>Jogar Novamente</button>
    </div>
  );
}

export default EndScreen;
