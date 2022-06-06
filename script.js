let resultOutput = document.querySelector(".winnerMessage")
let playerScore = document.querySelector(".playerScore")
let cpuScore = document.querySelector(".cpuScore")
let rockButton = document.getElementById("rockButton")
let paperButton = document.getElementById("paperButton")
let scissorsButton = document.getElementById("scissorsButton")
let resetButton = document.querySelector(".resetButton")
let mainButton = document.querySelector(".buttons-box")

resetButton.style.display = 'none'

let userChoice = "";

let userScore = 0;
let cpuScoreNum = 0;

function computerPlay() {
  cpuChoice = ["rock", "paper", "scissors"]

  return cpuChoice[Math.floor(Math.random() * 3)];
}

function chooseRock() {
  userChoice = "rock"
  return  userChoice;
}

function choosePaper() {
  userChoice = "paper"
  return userChoice;
}

function chooseScissors() {
  userChoice = "scissors"
  return userChoice;
}

rockButton.addEventListener("click", chooseRock);
rockButton.addEventListener("click", round);
rockButton.addEventListener("click", resetGame);

paperButton.addEventListener("click", choosePaper)
paperButton.addEventListener("click", round)
paperButton.addEventListener("click", resetGame);

scissorsButton.addEventListener("click", chooseScissors)
scissorsButton.addEventListener("click", round);
scissorsButton.addEventListener("click", resetGame);

function round() {  
  let cpuChoice = computerPlay();
  

  if (userChoice === cpuChoice) {
    resultOutput.textContent = "It's a tie!"
  } else if (userChoice === "rock" && cpuChoice === "scissors" || userChoice === "paper" && cpuChoice === "rock" || userChoice === "scissors" && cpuChoice === "paper") {
    userScore ++;
    playerScore.textContent = `Score: ${userScore}`;
    resultOutput.textContent = "You win!"
  } else if (userChoice === "rock" && cpuChoice === "paper" || userChoice === "paper" && cpuChoice === "scissors" || userChoice === "scissors" && cpuChoice === "rock") {
    cpuScoreNum ++;
    cpuScore.textContent = `Score: ${cpuScoreNum}`;
    resultOutput.textContent = "You lose!";
  }

  if (cpuScoreNum === 5) {    
    resultOutput.textContent = `The CPU has bested you! LOSER!`;
  } else if (userScore === 5) {      
    resultOutput.textContent = `You have stopped Skynet from taking over... for now.`;
  }
}

function resetGame() {
  if (cpuScoreNum === 5 || userScore === 5) {
    resetButton.style.display = '';
    mainButton.style.display = 'none';
  }
}

resetButton.addEventListener("click", resetValues)

function resetValues() {
      cpuScoreNum = 0;
      cpuScore.textContent = `Score: ${cpuScoreNum}`;
      userScore = 0;
      playerScore.textContent = `Score: ${userScore}`;
      resetButton.style.display = 'none'
      mainButton.style.display = '';
      resultOutput.textContent = "First to 5 wins. Can you beat the computer?";
      return;
}

