const historyButton = document.getElementById('history')
const scienceButton = document.getElementById('science')
const stateCapitalButton = document.getElementById('state-capital')
// const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const topicButtons = document.getElementsByClassName('topic-btn')
const finalScore = document.getElementById('score')

let score = 0



// historyButton.addEventListener('click', () => {
//     btn.style.display = 'none';
//     const box = document.getElementById('box');
//     box.style.display = 'block';
// });

// startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});

restartButton.addEventListener('click', function(){
  window.location.reload();
  return false;
});


let timer;
let totalSeconds = 0;
function countTimer(){
  let hour = Math.floor(totalSeconds/3600);
  let minute = Math.floor((totalSeconds-hour*3600)/60);
  let seconds = totalSeconds - (hour*3600 + minute*60);
  if(hour < 10)
  hour = '0' + hour;
  if(minute < 10)
  minute = '0' + minute;
  if(seconds < 10)
  seconds = '0' + seconds;
  document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
  ++totalSeconds;
}


function startGame(questions) {
historyButton.classList.add('hide')
scienceButton.classList.add('hide')
stateCapitalButton.classList.add('hide')
//   startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  countTimer()
  timer=setInterval(countTimer,1000)
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

function selectAnswer(a) {
  const selectedButton = a.target
  const correct = selectedButton.dataset.correct
  if (correct) {
    score += 1
    console.log(score)
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
  finalScore.innerText = ("Your score is: " + score + " out of 4")
  restartButton.innerText = ('Finish')
  restartButton.classList.remove('hide')
  clearInterval(timer)

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

function getQuestionsByCategory (event) {
    const id = event.target.id
    axios.get(`http://localhost:4905/api/quiz/${id}`)
    .then(response => {
        console.log(response.data)
        startGame(response.data)
    })
    .catch(err => console.log(err))
}
for (topic of topicButtons) {
    topic.addEventListener('click', getQuestionsByCategory)
}

//photo "https://images5.alphacoders.com/441/441469.jpg", 
