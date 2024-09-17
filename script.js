document.addEventListener("DOMContentLoaded", () => {
  let humanScore = 0;
  let computerScore = 0;
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");
  const result = document.querySelector("#res");
  const human = document.querySelector(".human");
  const computer = document.querySelector(".computer");
  const newGameBtn = document.querySelector("#new-game");
  const choices = document.querySelector(".choices");

  const humanScoreEl = document.createElement("h1");
  const computerScoreEl = document.createElement("h1");

  humanScoreEl.textContent = `${humanScore}`;
  computerScoreEl.textContent = `${computerScore}`;

  human.appendChild(humanScoreEl);
  computer.appendChild(computerScoreEl);

  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
      return "rock";
    } else if (choice === 1) {
      return "paper";
    }
    return "scissors";
  }

  function playRound(buttonPressed) {
    let computerChoice = getComputerChoice();
    let humanChoice = buttonPressed.id;

    // console.log("humanChoice", humanChoice);

    if (humanChoice === "scissors" && computerChoice === "rock") {
      result.textContent = "You lose! 🪨 beats ✂️!";
      computerScore++;
      computerScoreEl.textContent = `${computerScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      result.textContent = "You win! ✂️ beats 📃!";
      humanScore++;
      humanScoreEl.textContent = `${humanScore}`;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      result.textContent = "You lose! ✂️ beats 📃!";
      computerScore++;
      computerScoreEl.textContent = `${computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      result.textContent = "You win! 📃 beats 🪨!";
      humanScore++;
      humanScoreEl.textContent = `${humanScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      result.textContent = "You win! 🪨 beats ✂️!";
      humanScore++;
      humanScoreEl.textContent = `${humanScore}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      result.textContent = "You lose! 📃 beats 🪨!";
      computerScore++;
      computerScoreEl.textContent = `${computerScore}`;
    } else if (
      (humanChoice === "rock" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
      result.textContent = "Round tied!";
    }

    if (humanScore >= 5) {
      choices.classList.add("hidden");
      result.textContent = "You win!";
      newGameBtn.classList.remove("hidden");
    } else if (computerScore >= 5) {
      choices.classList.add("hidden");
      result.textContent = "You lose!";
      newGameBtn.classList.remove("hidden");
    }
  }

  rockBtn.addEventListener("click", () => {
    playRound(rockBtn);
  });

  paperBtn.addEventListener("click", () => {
    playRound(paperBtn);
  });

  scissorsBtn.addEventListener("click", () => {
    playRound(scissorsBtn);
  });

  function restartGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreEl.textContent = `${humanScore}`;
    computerScoreEl.textContent = `${computerScore}`;
    choices.classList.remove("hidden");
    newGameBtn.classList.add("hidden");
    result.textContent = "";
  }

  newGameBtn.addEventListener("click", () => {
    restartGame();
  });
});
