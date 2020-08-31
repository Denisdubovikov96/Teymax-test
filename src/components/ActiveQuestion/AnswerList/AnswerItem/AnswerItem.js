import React from "react";
import "./AnswerItem.css";

export default function AnswerItem({ answer, onAnswerClick, answerState }) {

  const cls = ['AnswerItem']
  if (answerState !== null && answer.id === answerState.id) {
    cls.push("answered")
  }
  return (
    <li className={cls.join(" ")} onClick={() => onAnswerClick(answer.id)}>
      <span>{answer.text}</span>
      {answerState !== null && answer.id === answerState.id ? (
        answerState.res === "success" ? (
          <span>
            <i className="fas fa-check"></i>
          </span>
        ) : (
          <span>
            <i className="fas fa-times"></i>
          </span>
        )
      ) : null}
    </li>
  );
}
