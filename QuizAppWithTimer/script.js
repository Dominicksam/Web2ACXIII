const quizData = [
  {
    question: "What does 'DOM' stand for in JavaScript?",
    a: "Document Object Model",
    b: "Data Object Model",
    c: "Display Object Management",
    d: "Digital Ordinance Model",
    correct: "a",
    difficulty: "Easy"
  },
  {
    question: "Which method adds a new element to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a",
    difficulty: "Easy"
  },
  {
    question: "What is the result of typeof null in JavaScript?",
    a: "'null'",
    b: "'object'",
    c: "'undefined'",
    d: "'number'",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "Which keyword is used to declare a constant variable?",
    a: "var",
    b: "const",
    c: "let",
    d: "define",
    correct: "b",
    difficulty: "Easy"
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    a: "Undefined",
    b: "Boolean",
    c: "Float",
    d: "Symbol",
    correct: "c",
    difficulty: "Medium"
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    a: "Compares values only",
    b: "Compares types only", 
    c: "Compares both value and type",
    d: "Assigns a value",
    correct: "c",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to remove the last element from an array?",
    a: "pop()",
    b: "push()",
    c: "shift()",
    d: "splice()",
    correct: "a",
    difficulty: "Easy"
  },
  {
    question: "What is a closure in JavaScript?",
    a: "A way to close the browser",
    b: "A function that has access to outer scope variables",
    c: "A method to end a loop",
    d: "A type of conditional statement",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which method converts a string to an integer?",
    a: "parseInt()",
    b: "parseFloat()",
    c: "toString()",
    d: "valueOf()",
    correct: "a",
    difficulty: "Easy"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    a: "var colors = 'red', 'green', 'blue'",
    b: "var colors = (1:'red', 2:'green', 3:'blue')",
    c: "var colors = ['red', 'green', 'blue']",
    d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    correct: "c",
    difficulty: "Easy"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "alertBox('Hello World');",
    b: "msg('Hello World');",
    c: "alert('Hello World');",
    d: "msgBox('Hello World');",
    correct: "c",
    difficulty: "Easy"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onchange",
    b: "onclick",
    c: "onmouseclick",
    d: "onmouseover",
    correct: "b",
    difficulty: "Easy"
  },
  {
    question: "How do you declare a JavaScript variable?",
    a: "variable carName;",
    b: "v carName;",
    c: "var carName;",
    d: "declare carName;",
    correct: "c",
    difficulty: "Easy"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "*",
    b: "=",
    c: "-",
    d: "x",
    correct: "b",
    difficulty: "Easy"
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    a: "true",
    b: "false",
    c: "NaN",
    d: "undefined",
    correct: "a",
    difficulty: "Easy"
  },
  {
    question: "Is JavaScript case-sensitive?",
    a: "No",
    b: "Yes",
    c: "Sometimes",
    d: "Only for variables",
    correct: "b",
    difficulty: "Easy"
  },
  {
    question: "Which method is used to find an element by its ID?",
    a: "getElementById()",
    b: "getElementByClassName()",
    c: "querySelector()",
    d: "findElement()",
    correct: "a",
    difficulty: "Medium"
  },
  {
    question: "What does JSON stand for?",
    a: "JavaScript Object Notation",
    b: "JavaScript Online Notation",
    c: "JavaScript Object Name",
    d: "JavaScript Oriented Notation",
    correct: "a",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to add an element to the beginning of an array?",
    a: "push()",
    b: "unshift()",
    c: "shift()",
    d: "splice()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is the correct way to write a JavaScript object?",
    a: "var person = {firstName:'John', lastName:'Doe'};",
    b: "var person = (firstName:'John', lastName:'Doe');",
    c: "var person = firstName = 'John', lastName = 'Doe';",
    d: "var person = 'firstName:John, lastName:Doe';",
    correct: "a",
    difficulty: "Medium"
  },
  {
    question: "Which statement is used to stop a loop?",
    a: "break",
    b: "stop",
    c: "exit",
    d: "end",
    correct: "a",
    difficulty: "Medium"
  },
  {
    question: "Which method removes the first element from an array?",
    a: "pop()",
    b: "shift()",
    c: "slice()",
    d: "splice()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is the result of 3 + '3' in JavaScript?",
    a: "6",
    b: "33",
    c: "NaN",
    d: "Error",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to join array elements into a string?",
    a: "concat()",
    b: "join()",
    c: "merge()",
    d: "combine()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is the difference between '==' and '==='?",
    a: "No difference",
    b: "== compares values, === compares values and types",
    c: "=== is faster",
    d: "== is deprecated",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to convert JSON string to JavaScript object?",
    a: "JSON.stringify()",
    b: "JSON.parse()",
    c: "JSON.convert()",
    d: "JSON.object()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is the scope of a variable declared with 'let'?",
    a: "Global scope",
    b: "Function scope",
    c: "Block scope",
    d: "Module scope",
    correct: "c",
    difficulty: "Medium"
  },
  {
    question: "Which loop is used to iterate over object properties?",
    a: "for",
    b: "while",
    c: "for...in",
    d: "forEach",
    correct: "c",
    difficulty: "Medium"
  },
  {
    question: "What does 'this' keyword refer to in JavaScript?",
    a: "The current function",
    b: "The global object",
    c: "The object that calls the function",
    d: "The previous object",
    correct: "c",
    difficulty: "Hard"
  },
  {
    question: "Which method is used to create a new array with results of calling a function for every array element?",
    a: "forEach()",
    b: "map()",
    c: "filter()",
    d: "reduce()",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "What is event bubbling in JavaScript?",
    a: "Events fire from parent to child",
    b: "Events fire from child to parent",
    c: "Events fire randomly",
    d: "Events don't propagate",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which method is used to execute a function after a specified delay?",
    a: "setInterval()",
    b: "setTimeout()",
    c: "setDelay()",
    d: "wait()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is a Promise in JavaScript?",
    a: "A function that returns a value",
    b: "An object representing eventual completion of an async operation",
    c: "A type of loop",
    d: "A variable declaration",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    a: "function",
    b: "def",
    c: "func",
    d: "method",
    correct: "a",
    difficulty: "Easy"
  },
  {
    question: "What is the result of typeof undefined?",
    a: "'null'",
    b: "'undefined'",
    c: "'object'",
    d: "Error",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to test if a value is an array?",
    a: "Array.isArray()",
    b: "typeof",
    c: "instanceof Array",
    d: "Both a and c",
    correct: "d",
    difficulty: "Hard"
  },
  {
    question: "What does the 'use strict' directive do?",
    a: "Makes JavaScript faster",
    b: "Enables strict mode",
    c: "Disables errors",
    d: "Adds new features",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to create a copy of an array?",
    a: "copy()",
    b: "clone()",
    c: "slice()",
    d: "duplicate()",
    correct: "c",
    difficulty: "Medium"
  },
  {
    question: "What is the difference between 'null' and 'undefined'?",
    a: "No difference",
    b: "null is assigned, undefined is not initialized",
    c: "undefined is assigned, null is not initialized",
    d: "They are the same value",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to find the length of a string?",
    a: "size",
    b: "length",
    c: "count",
    d: "chars",
    correct: "b",
    difficulty: "Easy"
  },
  {
    question: "What is hoisting in JavaScript?",
    a: "Moving variables to the top",
    b: "Variable and function declarations are moved to top of scope",
    c: "Creating new functions",
    d: "Deleting variables",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which method is used to round a number to the nearest integer?",
    a: "Math.round()",
    b: "Math.floor()",
    c: "Math.ceil()",
    d: "Math.int()",
    correct: "a",
    difficulty: "Medium"
  },
  {
    question: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
    a: "true",
    b: "false",
    c: "undefined",
    d: "Error",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which method is used to merge two or more arrays?",
    a: "merge()",
    b: "concat()",
    c: "combine()",
    d: "join()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is the Global Object in browsers?",
    a: "document",
    b: "window",
    c: "global",
    d: "this",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "Which method is used to convert a JavaScript object to JSON string?",
    a: "JSON.parse()",
    b: "JSON.stringify()",
    c: "toString()",
    d: "JSON.convert()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is the purpose of the 'async' keyword?",
    a: "Makes function synchronous",
    b: "Makes function asynchronous",
    c: "Speeds up function",
    d: "Delays function execution",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which method is used to check if an array includes a certain element?",
    a: "contains()",
    b: "includes()",
    c: "has()",
    d: "find()",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is the result of [] + [] in JavaScript?",
    a: "[]",
    b: "''",
    c: "undefined",
    d: "NaN",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which operator is used to delete properties from an object?",
    a: "remove",
    b: "delete",
    c: "unset",
    d: "clear",
    correct: "b",
    difficulty: "Medium"
  },
  {
    question: "What is a callback function?",
    a: "A function that calls itself",
    b: "A function passed as an argument to another function",
    c: "A function that returns a value",
    d: "A function with no parameters",
    correct: "b",
    difficulty: "Hard"
  },
  {
    question: "Which method is used to execute a function repeatedly at fixed intervals?",
    a: "setTimeout()",
    b: "setInterval()",
    c: "setRepeat()",
    d: "setLoop()",
    correct: "b",
    difficulty: "Medium"
  }
];

let currentQuiz = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;
let startTime;
let answeredQuestions = [];

// DOM Elements
const quiz = document.getElementById('quiz');
const resultsDiv = document.getElementById('results');
const answerEls = document.querySelectorAll('input[name="answer"]');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const skipBtn = document.getElementById('skip');
const questionCounter = document.getElementById('question-counter');
const timerEl = document.getElementById('timer');
const currentScoreEl = document.getElementById('current-score');
const progressBar = document.getElementById('progress');
const difficultyEl = document.getElementById('difficulty');

// Initialize quiz
startTime = Date.now();
loadQuiz();
startTimer();

function loadQuiz() {
  resetAnswerStyles();
  deselectAnswers();
  
  const currentQuizData = quizData[currentQuiz];
  
  // Update question and answers
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  
  // Update UI elements
  questionCounter.innerText = `${currentQuiz + 1} / ${quizData.length}`;
  difficultyEl.innerText = currentQuizData.difficulty;
  currentScoreEl.innerText = score;
  
  // Update progress bar
  const progress = ((currentQuiz + 1) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;
  
  // Update difficulty badge color
  const difficulty = currentQuizData.difficulty.toLowerCase();
  difficultyEl.className = 'difficulty-badge';
  if (difficulty === 'easy') {
    difficultyEl.style.background = 'linear-gradient(45deg, #888888, #aaaaaa)';
  } else if (difficulty === 'medium') {
    difficultyEl.style.background = 'linear-gradient(45deg, #666666, #888888)';
  } else {
    difficultyEl.style.background = 'linear-gradient(45deg, #333333, #555555)';
  }
  
  // Reset timer
  timeLeft = 30;
  updateTimer();
  
  // Update submit button text
  if (currentQuiz === quizData.length - 1) {
    submitBtn.innerHTML = '<i class="fas fa-flag-checkered"></i> Finish Quiz';
  } else {
    submitBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Next Question';
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    
    if (timeLeft <= 10) {
      timerEl.classList.add('warning');
    } else {
      timerEl.classList.remove('warning');
    }
    
    if (timeLeft <= 0) {
      handleTimeUp();
    }
  }, 1000);
}

function updateTimer() {
  timerEl.innerText = `${timeLeft}s`;
}

function handleTimeUp() {
  clearInterval(timerInterval);
  
  // Auto-submit without answer (counts as incorrect)
  answeredQuestions.push({
    question: currentQuiz,
    selectedAnswer: null,
    correct: false,
    timeUp: true
  });
  
  showCorrectAnswer();
  
  setTimeout(() => {
    nextQuestion();
  }, 2000);
}

function showCorrectAnswer() {
  const correctAnswer = quizData[currentQuiz].correct;
  const options = document.querySelectorAll('.answer-option');
  
  options.forEach(option => {
    const answer = option.dataset.answer;
    if (answer === correctAnswer) {
      option.classList.add('correct');
    }
  });
  
  // Disable all inputs
  answerEls.forEach(el => el.disabled = true);
  submitBtn.disabled = true;
  skipBtn.disabled = true;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach(el => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach(el => {
    el.checked = false;
    el.disabled = false;
  });
  submitBtn.disabled = false;
  skipBtn.disabled = false;
}

function resetAnswerStyles() {
  const options = document.querySelectorAll('.answer-option');
  options.forEach(option => {
    option.classList.remove('correct', 'incorrect');
  });
}

function nextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    clearInterval(timerInterval);
    loadQuiz();
    startTimer();
  } else {
    showResults();
  }
}

function showResults() {
  clearInterval(timerInterval);
  
  const endTime = Date.now();
  const totalTime = Math.round((endTime - startTime) / 1000);
  const percentage = Math.round((score / quizData.length) * 100);
  const incorrectCount = quizData.length - score;
  
  // Hide quiz container and show results
  quiz.style.display = 'none';
  resultsDiv.style.display = 'block';
  
  // Update results
  document.getElementById('final-score').innerText = `${score}/${quizData.length}`;
  document.getElementById('score-percentage').innerText = `${percentage}%`;
  document.getElementById('correct-count').innerText = score;
  document.getElementById('incorrect-count').innerText = incorrectCount;
  document.getElementById('time-taken').innerText = `${totalTime}s`;
  
  // Update trophy color based on performance
  const trophyIcon = document.querySelector('.trophy-icon i');
  if (percentage >= 80) {
    trophyIcon.style.color = '#999999'; // Light Gray
  } else if (percentage >= 60) {
    trophyIcon.style.color = '#777777'; // Medium Gray
  } else {
    trophyIcon.style.color = '#555555'; // Dark Gray
  }
}

// Event Listeners
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  
  if (answer) {
    clearInterval(timerInterval);
    
    const isCorrect = answer === quizData[currentQuiz].correct;
    if (isCorrect) {
      score++;
    }
    
    // Record answer
    answeredQuestions.push({
      question: currentQuiz,
      selectedAnswer: answer,
      correct: isCorrect,
      timeUp: false
    });
    
    // Show correct answer and user's choice
    const options = document.querySelectorAll('.answer-option');
    options.forEach(option => {
      const optionAnswer = option.dataset.answer;
      if (optionAnswer === quizData[currentQuiz].correct) {
        option.classList.add('correct');
      } else if (optionAnswer === answer && !isCorrect) {
        option.classList.add('incorrect');
      }
    });
    
    // Disable inputs
    answerEls.forEach(el => el.disabled = true);
    submitBtn.disabled = true;
    skipBtn.disabled = true;
    
    // Move to next question after delay
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  }
});

skipBtn.addEventListener('click', () => {
  // Record skipped question
  answeredQuestions.push({
    question: currentQuiz,
    selectedAnswer: null,
    correct: false,
    skipped: true
  });
  
  clearInterval(timerInterval);
  showCorrectAnswer();
  
  setTimeout(() => {
    nextQuestion();
  }, 2000);
});

// Add click animations to answer options
document.querySelectorAll('.answer-option').forEach(option => {
  option.addEventListener('click', () => {
    const radio = option.querySelector('input[type="radio"]');
    radio.checked = true;
  });
});

// Share results functionality
document.getElementById('share-results').addEventListener('click', () => {
  const percentage = Math.round((score / quizData.length) * 100);
  const shareText = `I just scored ${score}/${quizData.length} (${percentage}%) on the JavaScript Quiz Master! 🎯`;
  
  if (navigator.share) {
    navigator.share({
      title: 'JavaScript Quiz Master Results',
      text: shareText,
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Results copied to clipboard!');
    });
  }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (quiz.style.display !== 'none') {
    switch(e.key) {
      case '1':
      case 'a':
      case 'A':
        document.getElementById('a').checked = true;
        break;
      case '2':
      case 'b':
      case 'B':
        document.getElementById('b').checked = true;
        break;
      case '3':
      case 'c':
      case 'C':
        document.getElementById('c').checked = true;
        break;
      case '4':
      case 'd':
      case 'D':
        document.getElementById('d').checked = true;
        break;
      case 'Enter':
        if (!submitBtn.disabled) {
          submitBtn.click();
        }
        break;
      case ' ':
        e.preventDefault();
        if (!skipBtn.disabled) {
          skipBtn.click();
        }
        break;
    }
  }
});

