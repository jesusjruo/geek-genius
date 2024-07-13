const questionElement = document.querySelector('#question');
const answerButtonsElement = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next-button');
const categoryButtons = document.querySelectorAll('.category-button');
const startButton = document.querySelector('#start-button');
const retryButton = document.querySelector('#retry-button');
const backButton = document.querySelector('#back-button');
const startOverButton = document.querySelector('#start-over-button');
const stocksContainer = document.querySelector('#stocks-container');
const backgroundMusic = document.querySelector('#background-music');
const timerElement = document.querySelector('#time');


let currentQuestionIndex = 0;
let stocks = 2;
let selectedCategory = null;
let filteredQuestions = [];
backgroundMusic.volume = 0.03;
let timer;
let timeLeft;

const loadGame = () => {
    currentQuestionIndex = 0;
    stocks = 2;
    nextButton.classList.add('hide');
    document.querySelector('#question-container').classList.add('hide');
    document.querySelector('#category-container').classList.add('hide');
    document.querySelector('#lost-container').classList.add('hide');
    document.querySelector('#won-container').classList.add('hide');
    document.querySelector('#game-completed').classList.add('hide');
    document.querySelector('#title-container').classList.remove('hide');
}

const startGame = () => {
    currentQuestionIndex = 0;
    stocks = 2;
    nextButton.classList.add('hide');
    document.querySelector('#title-container').classList.add('hide');
    document.querySelector('#question-container').classList.add('hide');
    document.querySelector('#lost-container').classList.add('hide');
    document.querySelector('#won-container').classList.add('hide');
    document.querySelector('#game-completed').classList.add('hide');
    document.querySelector('#category-container').classList.remove('hide');

    backgroundMusic.play();
};

const selectCategory = (category) => {
    selectedCategory = category;
    filteredQuestions = questions.filter(question => question.category === selectedCategory);
    document.querySelector('#category-container').classList.add('hide');
    document.querySelector('#question-container').classList.remove('hide');

    showQuestion();
};

const showQuestion = () => {
    resetState();
    const question = filteredQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
    renderStocks();
    startTimer();
};

const resetState = () => {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.classList.add('hide');
    clearInterval(timer);
    timerElement.textContent = 15;
};

const renderStocks = () => {
    while (stocksContainer.firstChild) {
        stocksContainer.removeChild(stocksContainer.firstChild);
    }

    for(let i = 0 ; i < stocks ; i++ ){
        let heart = document.createElement('img');
        heart.src = './assets/heart.png';
        heart.width = 100;
        heart.height = 100;
        stocksContainer.appendChild(heart);
    }
}

const selectAnswer = (answer) => {
    clearInterval(timer);
    const answersArray = Array.from(answerButtonsElement.children); //Get an iterable array from all the answers

    if(answer === 'time') {
        answersArray.forEach(button => {
            button.style.backgroundColor = 'red';
        });
        stocks = stocks - 1;
    } else {
        answersArray.forEach(button => {
            button.disabled = true;
            if (button.textContent === answer.text) {
                if(answer.correct) {
                    button.style.backgroundColor = 'green';
                } else {
                    button.style.backgroundColor = 'red';
                    stocks = stocks - 1;
                }
            }
        });
    }

    nextButton.classList.remove('hide');
};

const startTimer = () => {
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer('time');
        }
    }, 1000);
};

const handleNextQuestion = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        if(stocks > 0) {
            showQuestion();
        } else {
            renderStocks();
            document.querySelector('#question-container').classList.add('hide');
            document.querySelector('#lost-container').classList.remove('hide');
        }
    } else {
        document.querySelector('#question-container').classList.add('hide');
        document.querySelector('#won-container').classList.remove('hide');

       const element = document.querySelector(`[data-category="${selectedCategory}"]`);
       element.classList.add('completed');
       checkGameCompleted();
    }
};

const checkGameCompleted = () => {
    gameCompleted = Array.from(categoryButtons).every(button => button.classList.contains('completed'));

    if(gameCompleted) {
        document.querySelector('#question-container').classList.add('hide');
        document.querySelector('#won-container').classList.add('hide');
        document.querySelector('#game-completed').classList.remove('hide');
    } else {
        return;
    }
};

categoryButtons.forEach(button => {
    button.addEventListener('click', () => selectCategory(button.dataset.category));
});

nextButton.addEventListener('click', handleNextQuestion);
startButton.addEventListener('click' , startGame);
retryButton.addEventListener('click' , startGame);
backButton.addEventListener('click' , startGame);
startOverButton.addEventListener('click' , loadGame);
document.addEventListener('DOMContentLoaded', loadGame);
