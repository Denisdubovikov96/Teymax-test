import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import "./AnswerList.css"

export default function AnswerList({ answers, onAnswerClick,answerState }) {
  return (
    <ul>
      {answers.map((item) => {
        return (
          <AnswerItem
            key={item.id}
            answer={item}
            onAnswerClick={onAnswerClick}
            answerState={answerState}
          />
        );
      })}
    </ul>
  );
}
