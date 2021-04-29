import React, { useState } from 'react';
import './App.css';
import { questions } from './data/questions.js';
import QuestionCard from './components/QuestionCard/QuestionCard';
import _ from 'lodash';
import Result from './components/Result/Result';

const randomQuestions = _.shuffle(questions)
  .slice(0, 10)
  .map((question) => {
    question.answers = _.shuffle(question.answers);
    return question;
  });

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answers, setAnswers] = useState(Array(10).fill(0));

  return (
    <div className="App">
      <h1>My quiz</h1>
      {questionNumber < 11 ? (
        <React.Fragment>
          <h2>
            Question: {questionNumber}, Correct Answers: {_.sum(answers)}
          </h2>
          <QuestionCard
            question={randomQuestions[questionNumber - 1]}
            answers={answers}
            setAnswers={setAnswers}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </React.Fragment>
      ) : (
        <Result answers={answers} />
      )}
    </div>
  );
}

export default App;
