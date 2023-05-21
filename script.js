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
    
]
