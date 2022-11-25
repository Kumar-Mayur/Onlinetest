const quizData = [{
    question: "Which type of JavaScript language is ___ ?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    question: "Which one of the following also known as Conditional Expression ?",
    a: "Alternative to if-else",
    b: "Alternative to if-else",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "When interpreter encounters an empty statements, what it will do ?",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    correct: "d",
  },
  {
    question: "The (function) and  (var) are known as ?",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c",
  },
  {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    a: "Global variable",
    b: "The local element",
    c: "The two of the above",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    correct: "d",
  },
  {
    question: "Which of the following type of a variable is volatile?",
    a: "Mutable variable",
    b: "Dynamic variable",
    c: "Volatile variable",
    d: "Immutable variable",
    correct: "a",
  },
  {
    question: "Which of the following option is used as hexadecimal literal beginning?",
    a: "00",
    b: "Ox",
    c: "OX",
    d: "Both Ox and OX",
    correct: "d",
  },
  {
    question: "Which of the following number object function returns the value of the number?",
    a: "toString()",
    b: "valueOf()",
    c: "toLocaleString()",
    d: "toPrecision()",
    correct: "b",
  }
];
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
  if (total === index) {
    return quizEnd()
  }
  reset()
  const data = quizData[index]
  questionBox.innerHTML = `${index + 1}) ${data.question}`
  allInputs[0].nextElementSibling.innerText = data.a
  allInputs[1].nextElementSibling.innerText = data.b
  allInputs[2].nextElementSibling.innerText = data.c
  allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
  "click",
  function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
      correct++;
    } else {
      incorrect++;
    }
    index++;
    loadQuestion()
  }
)

const getAnswer = () => {
  let ans;
  allInputs.forEach(
    (inputEl) => {
      if (inputEl.checked) {
        ans = inputEl.value;
      }
    }
  )
  return ans;
}

const reset = () => {
  allInputs.forEach(
    (inputEl) => {
      inputEl.checked = false;
    }
  )
}


const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Your Total scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);
