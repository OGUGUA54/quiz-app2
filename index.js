const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
   ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

    let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
      currentQuestionIndex++
      setNextQuestion() 
})

function startGame() {
    
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => { 
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)  
    });
}

function resetState(){
      nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)   
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
}) 
if(shuffledQuestions.length > currentQuestionIndex+1){
    nextButton.classList.remove('hide')
}else{
    startButton.innerText= 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')

}
const question = [
    {
      question: 'who is known as the king of righteousness in the bible?',
      answers: [
        {text: ' melchilzedek', correct: true},
        {text:'david', correct: false},
        {text:'solomon', correct: false},
        {text:'jeconiah', correct: false},
      ]
    },
    
    {
        question: 'who is the wife of uriah',
        answers: [
          {text: 'ishbosheth', correct:  false},
          {text:'bathsheba', correct:  true},
          {text:'saphirah', correct: false},
          {text:'mahalath', correct: false},
        ]
      },
      {
        question: 'which king of isreal was known for an era of peace',
        answers: [
          {text: 'manasseh', correct: false},
          {text:'david', correct: false},
          {text:'solomon', correct:  true},
          {text:'jeconiah', correct: false},
        ]
      },

      {
        question: 'who were the sons of judah',
        answers: [
          {text: 'isreal and issachar', correct: false},
          {text:'nathan and benjamin', correct: false},
          {text:'zerah and perez', correct:  true},
          {text:'jeconiah and ishmael', correct: false},
        ]
      },

      {
        question: 'what tribe is caleb from',
        answers: [
          {text: 'judah', correct:  true},
          {text:'benjamin', correct: false},
          {text:'levi', correct:  false},
          {text:'issachar', correct: false},
        ]
      },
]

