import React, { useState } from "react";
import "./App.css";
import { quiz } from "../../content/questions";
import FinishQuiz from "../FinishQuiz/FinishQuiz";
import ActiveQuestion from "../ActiveQuestion/ActiveQuestion";

function App() {
  const [quizState] = useState(quiz);

  const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [results, setResults] = useState([]);

  const [answerState, setAnswerState] = useState(null);

  const onAnswerClick = (answerId) => {
    // обьявлем текущий вопрос
    const question = quizState.questions[activeQuestionNumber];
    // получаем старый масив результатов
    const newResults = results;

    if (question.trueAnswerId === answerId) {
      // добавляем обьект с результатом в копию масива
      newResults.push({ id: answerId, res: "success" });

      setResults(newResults);
      setAnswerState({ id: answerId, res: "success" });

      // переход к следующему вопросу
      const timeout = window.setTimeout(() => {
        // делаем задержку 1 сек для отображения правильного ответа и затем переходим к следующему
        if (activeQuestionNumber + 1 === quizState.questions.length) {
          // если True значит прошлись по всем вопросам и состояние isFinished становится true
          setIsFinished(true);
          setAnswerState(null);
        } else {
          // если вернула false переходим к следующему вопросу и обнуляем состояние прдидущего ответа
          setActiveQuestionNumber(activeQuestionNumber + 1);
          setAnswerState(null);
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      // в копию добавляем новый обект с неправильным ответом
      newResults.push({ id: answerId, res: "error" });
      // добавляем состояние НЕ правильный ответ
      // добавляем масив результатов в стейт
      setAnswerState({ id: answerId, res: "error" });
      setResults(newResults);
      // переход к следующему вопросу
      const timeout = window.setTimeout(() => {
        // делаем задержку 1,5 сек для отображения правильного ответа и затем переходим к следующему
        if (activeQuestionNumber + 1 === quizState.questions.length) {
          // если True значит прошлись по всем вопросам и состояние isFinished становится true
          setIsFinished(true);
          setAnswerState(null);
        } else {
          // если вернула false переходим к следующему вопросу и обнуляем состояние прдидущего ответа
          setActiveQuestionNumber(activeQuestionNumber + 1);
          setAnswerState(null);
        }

        window.clearTimeout(timeout);
      }, 1000);
    }
  };

  return (
    <div className="Quiz">
      {isFinished ? (
        <FinishQuiz
          bgImage={quizState.quizTitleImage}
          results={results}
          quizLenght={quizState.questions.length}
          questionAfterQuiz={quizState.questionAfterQuiz}
        />
      ) : (
        <>
          <header
            style={{ backgroundImage: `url(${quizState.quizTitleImage})` }}
          >
            <h1>Тест: {quizState.quizName}</h1>
          </header>
          <main className="QuizContainer">
            <ActiveQuestion
              activeQuestionNumber={activeQuestionNumber}
              activeQuestion={quizState.questions[activeQuestionNumber]}
              quizLenght={quizState.questions.length}
              onAnswerClick={onAnswerClick}
              answerState={answerState}
            />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
