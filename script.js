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
    {name: "cars", images: "cars.png"},
    {name: "flush", images: "flush.png"},
    {name: "game", images: "game.png"},
    {name: "monitor", images: "monitor.png"},
    {name: "plants", images: "plants.png"},
    {name: "shower", images: "shower.png"},
    {name: "utensils", images: "utensils.png"},
    {name: "water_save", images: "water_save.png"},
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

