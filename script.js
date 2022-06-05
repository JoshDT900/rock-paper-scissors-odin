let resultOutput = document.querySelector(".winnerMessage")
let playerScore = document.querySelector(".playerScore")
let cpuScore = document.querySelector(".cpuScore")
let tiesScore = document.querySelector(".ties")

function computerPlay() {
  cpuChoice = ["rock", "paper", "scissors"]

  return cpuChoice[Math.floor(Math.random() * 3)];
}

function round(userChoice, cpuChoice) {  
  userChoice = userChoice.toLowerCase();
  
  if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    return resultOutput.textContent = "Invalid choice, please pick rock, paper, or scissors.";
  }

  if (userChoice === cpuChoice) {
    return "It's a tie!"
  } else if (userChoice === "rock" && cpuChoice === "scissors" || userChoice === "paper" && cpuChoice === "rock") {
    return "You win!"
  } else if (userChoice === "rock" && cpuChoice === "paper" || userChoice === "paper" && cpuChoice === "scissors") {
    return "You lose!";
  }
}

function game() {
  let cpuWins = 0;
  let playerWins = 0;
  let tiesNum = 0;

  for (let i = 0; i < 5; i++) {
    cpuChoice = computerPlay();
    userChoice = window.prompt("Choose either Rock, Paper, or Scissors.") 
    if (round(userChoice, cpuChoice) === "It's a tie!") {
      tiesNum++      
      resultOutput.textContent = "No one gets a point";
      tiesScore.textContent = `Number of ties: ${tiesNum}`
    } else if (round(userChoice, cpuChoice) === "You win!") {
      playerWins++     
      playerScore.textContent = `Player Score: ${playerWins}`;
      cpuScore.textContent = `CPU Score: ${cpuWins}`
    } else if (round(userChoice, cpuChoice) === "You lose!") {    
      cpuWins++;
      playerScore.textContent = `Player Score: ${playerWins}`
      cpuScore.textContent = `CPU Score: ${cpuWins}`;
    } else {
      alert("Please choose either rock, paper, or scissors")
      i--;
    }
  }

  if (cpuWins < playerWins) {
    return resultOutput.textContent = `The results is: You win!`
  } else if (cpuWins === playerWins) {
    return resultOutput.textContent = `The results is: It's a tie!`
  } else {
    return resultOutput.textContent = `The results is: You lose!`
  }
}

game();






