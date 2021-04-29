import React, { useState, useEffect } from 'react';
// import _ from "lodash";
import './QuestionCard.css';

export default function QuestionCard({
  question,
  questionNumber,
  setQuestionNumber,
  answers,
  setAnswers,
}) {
  const [pick, setPick] = useState(null);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  let timeOutHandle;

  useEffect(() => {
    return () => {
      clearTimeout(timeOutHandle);
    };
  }, [timeOutHandle]);

  const onSelectionChange = (e) => {
    if (isAnswerConfirmed) return;
    setPick(e.target.value);
  };

  const onButtonClick = () => {
    if (isAnswerConfirmed) return;
    const newAnswers = [...answers];
    newAnswers[questionNumber - 1] = pick === question.correctAnswer ? 1 : 0;
    setAnswers(newAnswers);
    setIsAnswerConfirmed(true);
    timeOutHandle = setTimeout(() => {
      setQuestionNumber((prev) => prev + 1);
      setPick(null);
      setIsAnswerConfirmed(false);
    }, 1000);
  };

  const addValidationStyling = (answer) => {
    if (question.correctAnswer === answer) return 'correct';
    if (pick === answer && answer !== question.correctAnswer) return 'wrong';
  };

  return (
    <div className="QuestionCard">
      <h3>{question.question}</h3>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <div key={index} className="answer-field">
            <input
              type="radio"
              name="answers"
              value={answer}
              id={`answer-${index}`}
              onChange={onSelectionChange}
              checked={pick === question.answers[index]}
            />
            <label
              className={isAnswerConfirmed ? addValidationStyling(answer) : ''}
              htmlFor={`answer-${index}`}
            >
              {answer}
            </label>
          </div>
        ))}
      </div>
      <button onClick={onButtonClick}>Odgovori</button>
    </div>
  );
}
