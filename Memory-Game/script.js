const cardArray = [
  {
    name: "banana",
    img: "images/banana.png",
  },
  {
    name: "berry",
    img: "images/berry.png",
  },
  {
    name: "coffee",
    img: "images/coffee.png",
  },
  {
    name: "icecream",
    img: "images/icecream.png",
  },
  {
    name: "orange",
    img: "images/orange.png",
  },
  {
    name: "tomato",
    img: "images/tomato.png",
  },
  {
    name: "banana",
    img: "images/banana.png",
  },
  {
    name: "berry",
    img: "images/berry.png",
  },
  {
    name: "coffee",
    img: "images/coffee.png",
  },
  {
    name: "icecream",
    img: "images/icecream.png",
  },
  {
    name: "orange",
    img: "images/orange.png",
  },
  {
    name: "tomato",
    img: "images/tomato.png",
  },
  {
    name: "jj",
    img: "images/jj.png",
  },
  {
    name: "jj",
    img: "images/jj.png",
  },
  {
    name: "peach",
    img: "images/peach.png",
  },
  {
    name: "peach",
    img: "images/peach.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {

  for (i = 0; i < cardArray.length; i++) {
    
    const card = document.createElement("img");
    card.setAttribute("src", "images/wrap.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {

  const cards = document.querySelectorAll("img");

  if (cardsChosenIds[0] == cardsChosenIds[1]) 
  {
    cards[cardsChosenIds[0]].setAttribute("src", "images/wrap.png");
    cards[cardsChosenIds[1]].setAttribute("src", "images/wrap.png");
  } 

  else if (cardsChosen[0] == cardsChosen[1])
  {
    cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png");
    cards[cardsChosenIds[1]].setAttribute("src", "images/blank.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } 
  else 
  {
    cards[cardsChosenIds[0]].setAttribute("src", "images/wrap.png");
    cards[cardsChosenIds[1]].setAttribute("src", "images/wrap.png");
  }

  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) 
  {
    resultDisplay.innerHTML = "Congratulations! You found them all";
  }
}

function flipCard() {
    
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
