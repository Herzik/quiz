const questions = [
  {
    question: 'Какой язык работает в браузере?',
    answers: ['Java', 'C', 'Python', 'JavaScript'],
    correct: 4,
  },
  {
    question: 'Что означает CSS?',
    answers: [
      'Central Style Sheets',
      'Cascading Style Sheets',
      'Cascading Simple Sheets',
      'Cars SUVs Sailboats',
    ],
    correct: 2,
  },
  {
    question: 'Что означает HTML?',
    answers: [
      'Hypertext Markup Language',
      'Hypertext Markdown Language',
      'Hyperloop Machine Language',
      'Helicopters Terminals Motorboats Lamborginis',
    ],
    correct: 1,
  },
  {
    question: 'В каком году был создан JavaScript?',
    answers: ['1996', '1995', '1994', 'все ответы неверные'],
    correct: 2,
  },
]

let questionIndex = 0
let score = 0

const headerContainer = document.querySelector('#header')
const listContaner = document.querySelector('#list')
const submitButton = document.querySelector('#submit')

const clearHTML = () => {
  headerContainer.innerHTML = ''
  listContaner.innerHTML = ''
}

const showResult = () => {
  const title = `<h2 class="title">Поздравляем ваш результат ${score} из ${questions.length}</h2>`
  headerContainer.insertAdjacentHTML('afterbegin', title)

  submitButton.textContent = 'Начать заново'

  submitButton.removeEventListener('click', checkAnswer)

  submitButton.addEventListener('click', () => {
    location.reload()
  })
}

const showQuestions = () => {
  const title = `<h2 class="title">${questions[questionIndex]['question']}</h2>`
  headerContainer.insertAdjacentHTML('afterbegin', title)

  for ([index, item] of questions[questionIndex]['answers'].entries()) {
    const answer = `
          <li>
            <label>
              <input value="${index + 1}" type="radio" class="answer" name="answer" />
              <span>${item}</span>
            </label>
          </li>`

    listContaner.insertAdjacentHTML('beforeend', answer)
  }
}

const checkAnswer = () => {
  const selectedAnswer = listContaner.querySelector('input[type="radio"]:checked')

  ;+selectedAnswer?.value === questions[questionIndex]['correct'] ? score++ : null

  if (questionIndex !== questions.length - 1) {
    questionIndex++
    clearHTML()
    showQuestions()
  } else {
    clearHTML()
    showResult()
  }
}

submitButton.addEventListener('click', checkAnswer)

clearHTML()
showQuestions()
