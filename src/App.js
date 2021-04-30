import React, { useState } from 'react';
import _ from 'lodash';
import { TIME_ALLOWED } from './config/config.js';

import './App.css';
import { questions } from './data/questions.js';
import QuestionCard from './components/QuestionCard/QuestionCard';
import Result from './components/Result/Result';
import Counter from './components/Counter/Counter';
import WelcomeCard from './components/WelcomeCard/WelcomeCard';

const randomQuestions = _.shuffle(questions)
  .slice(0, 10)
  .map((question) => {
    question.answers = _.shuffle(question.answers);
    return question;
  });

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [timer, setTimer] = useState(TIME_ALLOWED);

  const game = (
    <React.Fragment>
      <div className="scoreboard-container">
        <div className="correct-answers">
          <span>Tačnih odgovora:</span>
          <span className="digital">{_.sum(answers)}</span>
        </div>
        <Counter
          setIsTimeUp={setIsTimeUp}
          questionNumber={questionNumber}
          setTimer={setTimer}
          timer={timer}
        />
        <div className="wrong-answers">
          <span> Netačnih odgovora:</span>
          <span className="digital">
            {answers.filter((answer) => answer === 0).length}
          </span>
        </div>
      </div>
      {questionNumber < 11 && !isTimeUp ? (
        <QuestionCard
          question={randomQuestions[questionNumber - 1]}
          answers={answers}
          setAnswers={setAnswers}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ) : (
        <Result answers={answers} timer={timer} />
      )}
    </React.Fragment>
  );

  return (
    <div className="App">
      <h1>MY QUIZ</h1>
      {questionNumber === 0 ? (
        <WelcomeCard setQuestionNumber={setQuestionNumber} />
      ) : (
        game
      )}
    </div>
  );
}

export default App;
