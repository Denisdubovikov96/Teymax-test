import TitleImage from "./img/quiz-title-tmage.jpg";
import q2 from "./img/question2.jpg";
import q3 from "./img/question3.jpg";
import q8 from "./img/question8.jpg";
import q9 from "./img/question9.jpg";
import q10 from "./img/question10.jpg";
import q11 from "./img/question11.jpg";

export const quiz = {
  quizName: "12 Рандомных вопросов от Дениса",
  quizTitleImage: TitleImage,
  questionAfterQuiz: "А какой бы ты придумал опросник?",
  questions: [
    {
      id: 1,
      question: "Какое животное является самым большим в мире?",
      answers: [
        { id: 1, text: "Полярный медведь" },
        { id: 2, text: "Африканский слон" },
        { id: 3, text: "Голубой кит" },
      ],
      trueAnswerId: 3,
      questionImage: q2,
    },
    {
      id: 2,
      question: "Назовите валюту Чехии:",
      answers: [
        { id: 1, text: "Чешский доллар" },
        { id: 2, text: "Чешская крона" },
        { id: 3, text: "Чешский динар" },
      ],
      trueAnswerId: 2,
      questionImage: q2,
    },
    {
      id: 3,
      question: "Роберт Плант - известный вокалист группы...",
      answers: [
        { id: 1, text: "Pink Floyd" },
        { id: 2, text: "Led Zeppelin" },
        { id: 3, text: "The Rolling Stones" },
      ],
      trueAnswerId: 2,
      questionImage: q3,
    },
    {
      id: 4,
      question: "Чему равен квадратный корень из числа 441?",
      answers: [
        { id: 1, text: "20" },
        { id: 2, text: "19" },
        { id: 3, text: "21" },
      ],
      trueAnswerId: 3,
      questionImage: null,
    },
    {
      id: 5,
      question: "Напишите число 1999 римскими цифрами:",
      answers: [
        { id: 1, text: "MCMXCIX" },
        { id: 2, text: "MDMXCIVX" },
        { id: 3, text: "MCMXCVII" },
      ],
      trueAnswerId: 1,
      questionImage: null,
    },
    {
      id: 6,
      question: "Кто автор рассказа 'Дама с собачкой'?",
      answers: [
        { id: 1, text: "М. А. Булгаков" },
        { id: 2, text: "Л. Н. Толстой" },
        { id: 3, text: "А. П. Чехов" },
      ],
      trueAnswerId: 3,
      questionImage: null,
    },
    {
      id: 7,
      question:
        "Какая фамилия не фигурировала в пьесе Шекспира 'Ромео и Джульетта'?",
      answers: [
        { id: 1, text: "Кэмпбелл" },
        { id: 2, text: "Капулетти" },
        { id: 3, text: "Монтекки" },
      ],
      trueAnswerId: 1,
      questionImage: null,
    },
    {
      id: 8,
      question: "Какой обитатель водной стихии славится репутацией отшельника?",
      answers: [
        { id: 1, text: "Бычок" },
        { id: 2, text: "Рак" },
        { id: 3, text: "Дельфин" },
      ],
      trueAnswerId: 2,
      questionImage: q8,
    },
    {
      id: 9,
      question: "Какой цвет получится, если смешать синий и красный?",
      answers: [
        { id: 1, text: "Зелёный" },
        { id: 2, text: "Малиновый" },
        { id: 3, text: "Фиолетовый" },
      ],
      trueAnswerId: 3,
      questionImage: q9,
    },
    {
      id: 10,
      question: "Кто убил Клеопатру?",
      answers: [
        { id: 1, text: "Клеопатра сама себя убила" },
        { id: 2, text: "Юлий Цезарь" },
        { id: 3, text: "Александр Македонский" },
      ],
      trueAnswerId: 1,
      questionImage: q10,
    },
    {
      id: 11,
      question: "В каком городе стоит 38-метровая статуя Иисуса Христа?",
      answers: [
        { id: 1, text: "Сан-Франциско" },
        { id: 2, text: "Нью-Йорк" },
        { id: 3, text: "Рио-де-Жанейро" },
      ],
      trueAnswerId: 3,
      questionImage: q11,
    },
    {
      id: 12,
      question: "Что из этого является названием координаты?",
      answers: [
        { id: 1, text: "Мантисса" },
        { id: 2, text: "Абсцисса" },
        { id: 3, text: "Биссектриса" },
      ],
      trueAnswerId: 3,
      questionImage: null,
    },
  ],
};
