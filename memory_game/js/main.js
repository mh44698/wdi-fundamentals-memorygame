var cards = [
          {
                   rank: "queen",
                   suit: "hearts",
                   image: "images/queen-of-hearts.png"
          },
          {
                   rank: "queen",
                   suit: "diamonds",
                   image: "images/queen-of-diamonds.png"
          },
          {
                   rank: "king",
                   suit: "hearts",
                   image: "images/king-of-hearts.png"
          },
          {
                   rank: "king",
                   suit: "diamonds",
                   image: "images/king-of-diamonds.png"
          }
];

var cardsInPlay = [];

function checkForMatch() {
          if (cardsInPlay[0] === cardsInPlay[1]) {
                   alert("You found a match!");
} else {
                   alert("Sorry, try again.");
}
}
function flipCard() {
          var cardID = this.getAttribute('data-id');
          cardsInPlay.push(cards[cardID].rank);
          console.log("User flipped " + cards[cardID].rank);
          console.log(cards[cardID].suit);
          console.log(cards[cardID].image);
          this.setAttribute("src", cards[cardId].cardImage)    
          if (cardsInPlay.length === 2)  {
                   checkForMatch();
          }        
}

function createBoard() {
          for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener("click", flipCard);
    var gb = document.getElementById('game-board');
    gb.appendChild(cardElement);
}
}

createBoard();
	





