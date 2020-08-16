const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function next() {
    var name = document.getElementById("");
}

const questions = [
  {
    question: 'Pakistan is located in the __________.',
    answers: [
      { text: 'West Asia', correct: false},
      { text: 'Central Asia', correct: false },
      { text: 'East Asia', correct: false },
      { text: 'South Asia', correct: true }
    ]
  },
  {
    question: 'The only country with which Pakistan shares a maritime border (and not the land border) is _______.',
    answers: [
      { text: 'Oman', correct: true },
      { text: 'Iran', correct: false },
      { text: 'UAE', correct: false },
      { text: 'Saudi Arabia', correct: false }
    ]
  },
  {
    question: 'K2 the second highest mountain in the world is located along the border or Pakistan and ________.',
    answers: [
      { text: 'India', correct: false },
      { text: 'Afghanistan', correct: false },
      { text: 'China', correct: true },
      { text: 'Iran', correct: false }
    ]
  },
  {
    question: 'According to the constitution of Pakistan, the chief executive and the most powerful person in Pakistan is __________',
    answers: [
      { text: 'President', correct: false },
      { text: 'Prime Minister', correct: true },
      { text: 'Army Chief', correct: false },
      { text: 'Chief Justice', correct: false },
    ]
  },
  {
question: 'In Urdu, the name “Pakistan” literally means?',
    answers: [
      { text: 'Pure Land', correct: false },
      { text: 'Land Of Pure', correct: true },
      { text: 'Truthful Land', correct: false },
      { text: 'Land of the Truthfulness', correct: false },
    ]
  },
  {
question: 'Which animal is the national animal of Pakistan?',
    answers: [
      { text: 'Tiger', correct: false },
      { text: 'Lion', correct: false },
      { text: 'Markhor', correct: true },
      { text: 'Arabian Horse', correct: false },
    ]
},
{
    question: 'Indian forces occupied Kashmir in ____',
        answers: [
          { text: '1947', correct: false },
          { text: '1950', correct: false },
          { text: '1949', correct: false },
          { text: '1948', correct: true },
        ]
    },
    {
        question: 'Quaid-e-Azam joined the All-India Muslim League in ____',
            answers: [
              { text: '1913', correct: true },
              { text: '1911', correct: false },
              { text: '1909', correct: false },
              { text: '1907', correct: false },
            ]
        }
]