import React, { useState } from 'react';
import _ from 'lodash';

import './App.css';
import { questions } from './data/questions.js';
import QuestionCard from './components/QuestionCard/QuestionCard';
import Result from './components/Result/Result';
import Counter from './components/Counter/Counter';

const randomQuestions = _.shuffle(questions)
  .slice(0, 10)
  .map((question) => {
    question.answers = _.shuffle(question.answers);
    return question;
  });

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answers, setAnswers] = useState(Array(10).fill(0));
  const [isTimeUp, setIsTimeUp] = useState(false);

  return (
    <div className="App">
      <h1>MY QUIZ</h1>
      <Counter isTimeUp={isTimeUp} setIsTimeUp={setIsTimeUp} />
      {questionNumber < 11 && !isTimeUp ? (
        <QuestionCard
          question={randomQuestions[questionNumber - 1]}
          answers={answers}
          setAnswers={setAnswers}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ) : (
        <Result answers={answers} />
      )}
    </div>
  );
}

export default App;
