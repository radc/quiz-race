// src/Question.js
import React, { useState, useEffect } from 'react';

function Question({
  score,
  setScore,
  endGame,
  timeLeft,
  setTimeLeft,
  question,
  moveToNextQuestion,
}) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    setSelectedOptionIndex(null);
    setFeedback(null);
  }, [question]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedOptionIndex === null) {
        const key = event.key;
        if (key === '0') {
          // Pressionando '0' pula a pergunta
          handleSkip();
        } else {
          const optionIndex = parseInt(key) - 1;
          if (
            !isNaN(optionIndex) &&
            optionIndex >= 0 &&
            optionIndex < question.options.length
          ) {
            const selectedOption = question.options[optionIndex];
            handleAnswer(selectedOption, optionIndex); // Correção aplicada aqui
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [question, selectedOptionIndex, timeLeft]);

  const handleAnswer = (option, index) => {
    setSelectedOptionIndex(index);
    const isCorrect = option === question.answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      if (isCorrect) {
        setScore(score + 1);
        setTimeLeft(timeLeft + 3); // Adiciona 3 segundos ao tempo
      } else {
        setTimeLeft(timeLeft - 10); // Desconta 10 segundos do tempo
        if (timeLeft - 10 <= 0) {
          endGame();
          return;
        }
      }
      moveToNextQuestion();
      setFeedback(null);
      setSelectedOptionIndex(null);
    }, 500);
  };

  const handleSkip = () => {
    setTimeLeft(timeLeft - 3); // Desconta 3 segundos do tempo
    if (timeLeft - 3 <= 0) {
      endGame();
      return;
    }
    moveToNextQuestion();
  };

  const renderQuestion = () => {
    return (
      <>
        <h3>{question.category}</h3>
        <h2>{question.question}</h2>
      </>
    );
  };

  return (
    <div className="question">
      {renderQuestion()}
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              if (selectedOptionIndex === null) {
                handleAnswer(option, index);
              }
            }}
            className={`
              ${selectedOptionIndex === index ? 'selected' : ''}
              ${feedback && selectedOptionIndex === index ? feedback : ''}
            `}
          >
            {index + 1}. {option}
          </button>
        ))}
      </div>
      <button className="skip-button" onClick={handleSkip}>
        Pular (-3s)
      </button>
    </div>
  );
}

export default Question;
