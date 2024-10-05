// src/data/questions.js

import mathQuestions from './mathQuestions';
import geographyQuestions from './geographyQuestions';
import historyQuestions from './historyQuestions';
import englishQuestions from './englishQuestions';
import generalKnowledgeQuestions from './generalKnowledgeQuestions';
import footballQuestions from './footballQuestions'; // Importação das perguntas de futebol

const allQuestions = [
  ...mathQuestions,
  ...geographyQuestions,
  ...historyQuestions,
  ...englishQuestions,
  ...generalKnowledgeQuestions,
  ...footballQuestions, // Adição das perguntas de futebol
];

export default allQuestions;
