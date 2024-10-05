// src/App.js
import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';
import allQuestions from './data/questions'; // Importar todas as perguntas
import { shuffleArray } from './utils'; // Função para embaralhar o array

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]); // Adicionado
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Adicionado

  const startGame = () => {
    const shuffledQuestions = shuffleArray([...allQuestions]); // Embaralha as perguntas
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setGameStarted(true);
    setTimeLeft(120);
    setScore(0);
    setGameOver(false);
  };

  const endGame = () => {
    setGameOver(true);
  };

  const moveToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="app">
      {!gameStarted && <StartScreen startGame={startGame} />}
      {gameStarted && !gameOver && timeLeft > 0 && currentQuestionIndex < questions.length && (
        <>
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} gameOver={gameOver} />
          <Question
            score={score}
            setScore={setScore}
            endGame={endGame}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            question={questions[currentQuestionIndex]}
            moveToNextQuestion={moveToNextQuestion}
          />
          <div className="score">Acertos: {score}</div>
        </>
      )}
      {(gameOver || timeLeft <= 0 || currentQuestionIndex >= questions.length) && gameStarted && (
        <EndScreen score={score} startGame={startGame} />
      )}
    </div>
  );
}

export default App;
