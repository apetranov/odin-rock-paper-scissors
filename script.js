let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  }
  return "scissors";
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Choose rock, paper or scissors: "
  ).toLocaleLowerCase();

  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt(
      "Choose rock, paper or scissors: "
    ).toLocaleLowerCase();
  }
  return humanChoice;
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper!");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!");
    humanScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("Round tied!");
  }
}

// function playGame() {
//   for (let index = 1; index <= 5; index++) {
//     playRound();
//   }

//   if (humanScore > computerScore) {
//     console.log("You won the game!");
//   } else if (computerScore > humanScore) {
//     console.log("You lost the game!");
//   } else {
//     console.log("Game tied!");
//   }
// }

playGame();
