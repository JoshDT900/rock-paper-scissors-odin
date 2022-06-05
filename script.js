let userChoice = window.prompt("Choose either Rock, Paper, or Scissors.")
let cpuChoice = ["rock", "paper", "scissors"]

cpuChoice = cpuChoice[Math.floor(Math.random() * 3)]
userChoice = userChoice.toLowerCase();

let playerOutput = document.querySelector(".userChoice")
let cpuOutput = document.querySelector(".computerChoice")
let resultOutput = document.querySelector(".winnerMessage")

function computerPlay(userChoice, cpuChoice) {

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

playerOutput.textContent = `The player chose ${userChoice}`
cpuOutput.textContent = `The compyter chose ${cpuChoice}`
resultOutput.textContent = `The results is: ${computerPlay(userChoice, cpuChoice)}`
