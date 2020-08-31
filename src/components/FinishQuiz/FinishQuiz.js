import React from "react";
import "./FinishQuiz.css";

const links = [
  {
    id: 1,
    link: "https://web.telegram.org/",
    iconClass: "fab fa-telegram-plane",
  },
  { id: 2, link: "https://vk.com/", iconClass: "fab fa-vk" },
  { id: 3, link: "https://twitter.com/", iconClass: "fab fa-twitter" },
  { id: 4, link: "https://www.facebook.com/", iconClass: "fab fa-facebook-f" },
];
export default function FinishQuiz({
  bgImage,
  results,
  quizLenght,
  questionAfterQuiz,
}) {
  const trueAnswers = results.reduce((accumulator, currentItem) => {
    if (currentItem.res === "success") {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  const textMark = (item, allQuestion) => {
    switch (item) {
      case 3:
        return "Ты еще слишком молод";
      case 5:
        return "Ты почти смог";
      case 7:
        return "Для первого раза пойдет";
      case 10:
        return "А ты хорош";
      case 11:
        return "Превосходная работа";
      case allQuestion:
        return "Ты best of the best";
      default:
        return "'Молодец'";
    }
  };

  return (
    <div className="FinishQuiz" style={{ backgroundImage: `url(${bgImage})` }}>
      <div>
        <span>
          <span>{trueAnswers}</span>/{quizLenght}
        </span>
        <h2>{textMark(trueAnswers, quizLenght)}</h2>
        <p>{questionAfterQuiz}</p>
        <div className="Links">
          {links.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <i className={item.iconClass} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
