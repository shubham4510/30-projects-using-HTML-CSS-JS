const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select an HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React.js, which hook is used to perform side effects in a function component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll("#question, #option-1,#option-2,#option-3,#option-4");

  const submitBtn = document.getElementById("submit");

  const currentQuiz = 0;
  const score = 0;

  //Load Quiz function

  const loadQuiz = () => {
    const  {question,options} = quizData[currentQuiz];
    console.log(question);
  }
