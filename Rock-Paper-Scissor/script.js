const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

const generateComputerChoice = () => {
  const randomNumber = Math.ceil(Math.random() * 3);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === userChoice) {
    result = "its a Draw!!";
  } else if (computerChoice == "Rock" && userChoice == "Paper") {
    result = "you Won!!";
  } else if (computerChoice == "Paper" && userChoice == "Scissor") {
    result = "you Won!!";
  } else if (computerChoice == "Scissor" && userChoice == "Rock") {
    result = "you Won!!";
  } else {
    result = "you Lose!!";
  }
  resultDisplay.innerHTML = result;
};
