
// Select action buttons
const startButton = document.getElementById("start-btn");

// Select Countdown container
const countContainer = document.getElementById("timer-count");





// variable to store count
var remainingTime = 75;

// variable to store time interval
var timer;

// Variable to track whether timer is running or not
var isStopped = true;

// Function to start Timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Attach onclick event to buttons
startButton.onclick = startTimer;

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = remainingTime;
  // timeout on zero
  if (remainingTime < 1) {
    isStopped = true;
    countContainer.innerHTML = 0
    clearInterval(timer);
    alert("time is up!")
    questionContainerElement.classList.add('hide')
    allDone.classList.remove('hide')



  }
};




// Quiz page with Questions and Answers
const questionContainerElement = document.getElementById('question-container')
// Question loader
const questionElement = document.getElementById('question')
// Answer loader
const answerButtonsElement = document.getElementById('answer-buttons')
// "Coding Quiz Challenge" intro page
const introElement = document.getElementById('intro')
// after answering multiple choicse will lead to next question
const nextButton = document.getElementsByClassName('btn')



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz);





function startQuiz() {
    console.log('started')
    introElement.classList.add('hide')
    highscores.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
   
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
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (correct){
        const right = document.getElementById('right')
        right.classList.remove('hide')
    }else{
        const wrong = document.getElementById('wrong')
        wrong.classList.remove('hide')
        // if (remainingTime > 12) {
        remainingTime = remainingTime -10  
        // }else{
        // remainingTime = 0    
        // }
        
        
    } 
    setTimeout(function(){
        if (correct){
            const right = document.getElementById('right')
            right.classList.add('hide')
        }else{
            const wrong = document.getElementById('wrong')
            wrong.classList.add('hide')
        }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex ++
    setNextQuestion()
    }else{
        isStopped = true;
        clearInterval(timer);
        countContainer.innerHTML = remainingTime
  
        questionContainerElement.classList.add('hide')
        allDone.classList.remove('hide')
        const score = document.getElementById('score-count')
        score.textContent = remainingTime

    }
    },1000)


}
    

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      console.log('right!')
      
    } else {
        console.log('wrong!')
      
      
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Commonly used data types DO NOT\n include:',
        answers: [
            { text: '1. strings', correct: false },
            { text: '2. boolean', correct: false },
            { text: '3. alerts', correct: true },
            { text: '4. numbers', correct: false }
        ]
    },
    {
        question: 'The condition is an if / else statment is\n enclosed within ________.',
        answers: [
            { text: '1. quotes', correct: false },
            { text: '2. curly brackets', correct: false },
            { text: '3. parentheses', correct: true },
            { text: '4. square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store\n______.',
        answers: [
            { text: '1. numbers and strings', correct: false },
            { text: '2. other arrays', correct: false },
            { text: '3. booleans', correct: false },
            { text: '4. all of the above', correct: true }
        ]
    },
    {
        question: 'String values must be enclosed within _____\nwhen being assigned to variables.',
        answers: [
            { text: '1. commas', correct: false },
            { text: '2. curly brackets', correct: false },
            { text: '3. quotes', correct: true },
            { text: '4. parentheses', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development\n and debugging for printing content to the\n debugger is:',
        answers: [
            { text: '1. JavaScript', correct: false },
            { text: '2. terminal/bash', correct: false },
            { text: '3. for loops', correct: false },
            { text: '4. console.log', correct: true }
        ]
    },

]

const allDone = document.getElementById('all-done')
const highscores = document.getElementById('highscores')
const homeBtn = document.getElementById('home-btn')
const highscoresBtn = document.getElementById('header')

highscoresBtn.addEventListener('click', highscoresPage);

function highscoresPage(){
    console.log('highscore')
    isStopped = true;
    clearInterval(timer);
    countContainer.innerHTML = 0
    questionContainerElement.classList.add('hide')
    introElement.classList.add('hide')
    highscores.classList.remove('hide')
    allDone.classList.add('hide')
    homeBtn.classList.remove('hide')
    init()
}

homeBtn.addEventListener('click', Homepage);

function Homepage(){
    introElement.classList.remove('hide')
    highscores.classList.add('hide')
    allDone.classList.add('hide')
    homeBtn.classList.add('hide')
}






//All done initals imput into Highscores page
var initalInput = document.querySelector("#inital-text");
var initialForm = document.querySelector("#inital-form");
var initalsList = document.querySelector("#highscore-list");


var initals = JSON.parse(localStorage.getItem("initals")) || [];

// The following function renders items in a inital list as <li> elements
function renderInitals() {
  // Clear initalsList element and update todoCountSpan
  initalsList.innerHTML = "";

  // Render a new li for each inital
  for (var i = 0; i < initals.length; i++) {
    var inital = initals[i];

    var li = document.createElement("li");
    li.textContent = inital.initalText + ' '+ inital.remainingTime;
    


    initalsList.append(li);

    highscores.classList.remove('hide')
    allDone.classList.add('hide')
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored initals from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("initals"));

  // If initals were retrieved from localStorage, update the initals array to it
  if (storedTodos !== null) {
    initals = storedTodos;
  }

  // This is a helper function that will render initals to the DOM
  renderInitals();
}

function storeInitals() {
  // Stringify and set key in localStorage to initals array
  localStorage.setItem("initals", JSON.stringify(initals));
}

// Add submit event to form
initialForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var initalText = initalInput.value.trim();
  var tempObj = {
      initalText,
      remainingTime
  }

  // Return from function early if submitted initalText is blank
  if (initalText === "") {
    return;
  }

  // Add new initalText to initals array, clear the input
  initals.push(tempObj);
  initalInput.value = "";

  // Store updated initals in localStorage, re-render the list
  storeInitals();
  renderInitals();
});

// Add click event to highscoreList element
initalsList.addEventListener("click", function(event) {
  var element = event.target;
  homeBtn.classList.remove('hide')

  // Checks if element is a inital
  if (element.matches("inital") === true) {
    // Get its data-index value and remove the inital element from the list
    var index = element.parentElement.getAttribute("data-index");
    initals.splice(index, 1);

    // Store updated initals in localStorage, re-render the list
    storeInitals();
    renderInitals();
  }
});

// credit to "https://youtu.be/riDzcEQbX6k"




