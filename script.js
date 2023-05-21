const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameConatiner = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval; 
let firstCard = false;
let secondCard = false;


//images arrays
const items = [
    {name: "cars", image: "cars.png"},
    {name: "flush", image: "flush.png"},
    {name: "game", image: "game.png"},
    {name: "monitor", image: "monitor.png"},
    {name: "plants", image: "plants.png"},
    {name: "shower", image: "shower.png"},
    {name: "utensils", image: "utensils.png"},
    {name: "water_save", image: "water_save.png"},
];

//The initial time 
let seconds = 0,
    minutes = 0;

let moveCount = 0,
    winCount = 0;

//For the timer
const timeGenerator = () => {
    seconds +=1;
    if (seconds >=60) {
        minutes += 1;
        seconds = 0;
    }

    //formating the time that will be displayed
    let secondValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondValue}`;
};


//this is to show the calculating moves
const movesCounter = () => {
    moveCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//This is for picking random objects from the images array
const generateRandom = (size = 4) => {
    let tempArray = [...items];
    let cardValues = [];
    size = (size * 3) / 2;

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];

    cardValues.sort(() => Math.random() -0.5);

    for (let i = 0; i < size * 3; i++){
        gameContainer.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before"></div>
        <div class="card-after">
        <img src "${cardValues[i].image}" class="image"/></div>
        </div>
        `;
    }

    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

    //The cards to be displayed
    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched")){
                card.classList.add("flipped");
                if (!firstCard){
                    firstCard = card;
                    firstCardValue = card.getAttribute("data-card-value");
                } else{
                    movesCounter();
                    secondCard = card;
                    let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue){
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            firstCard = false;
            winCount += 1;
         

            if (winCount == Math.floor(cardValues.length/2)) {
                result.innerHTML = `<h2>Congratulation 🥳 🎊 </h2>
                <h3>Mission complete 🎉💃</h3>
              <h4>You have ${movesCount} moves</h4>
              <button class="play-again"onclick="TryAgain()">
              Try again 😄</a>
          </button>`;
             stopGame();
            }
          } else {
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
 });
};


//starting the game

startButton.addEventListener("click", () => {

});