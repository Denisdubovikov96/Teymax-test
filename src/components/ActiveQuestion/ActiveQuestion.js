import React from "react";
import AnswerList from "./AnswerList/AnswerList";
import "./ActiveQuestion.css";

export default function ActiveQuestion({
  activeQuestionNumber,
  activeQuestion,
  onAnswerClick,
  quizLenght,
  answerState,
}) {
  const { question, answers, questionImage } = activeQuestion;
  return (
    <div className="ActiveQuiz">
      <p>{question}</p>
      <span>{`${activeQuestionNumber + 1}/${quizLenght}`}</span>
      <div className="Progress">
        <div
          style={{
            width: `${((activeQuestionNumber + 1) * 100) / quizLenght}%`,
          }}
        />
      </div>
      {questionImage !== null ? (
        <div
          className="Image"
          style={{ backgroundImage: `url(${questionImage})` }}
        />
      ) : null}
      <AnswerList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  );
}
