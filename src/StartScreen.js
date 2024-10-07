// src/StartScreen.js

import React from 'react';

function StartScreen({ startGame }) {
  return (
    <div className="start-screen">
      <h1>Bem-vindo ao Quiz Race!</h1>
      <div className="instructions">
        <h2>Instruções do Jogo</h2>
        <p>
          - O objetivo do jogo é responder o máximo de perguntas possível dentro do tempo limite.
        </p>
        <p>
          - Você começa com <strong>120 segundos</strong>.
        </p>
        <p>
          - Para cada resposta correta, você ganha <strong>+3 segundos</strong>.
        </p>
        <p>
          - Para cada resposta incorreta, são descontados <strong>-10 segundos</strong>.
        </p>
        <p>
          - Você pode pular uma pergunta pressionando o botão "Pular" ou a tecla <strong>0</strong>, mas perderá <strong>-3 segundos</strong>.
        </p>
        <p>
          - Utilize as teclas numéricas <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, <strong>4</strong> para selecionar uma opção.
        </p>
        <p>
          - O jogo termina quando o tempo chega a zero ou todas as perguntas são respondidas.
        </p>
        <p>Boa sorte e divirta-se!</p>
      </div>
      <button onClick={startGame}>Iniciar Jogo</button>
    </div>
  );
}

export default StartScreen;
