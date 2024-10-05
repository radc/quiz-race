// src/utils.js
import allQuestions from './data/questions';

export function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * allQuestions.length);
  return allQuestions[randomIndex];
}


export function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }