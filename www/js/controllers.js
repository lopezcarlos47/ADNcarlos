angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})

.controller('JuegoCtrl', function($scope) {
  const cardArray = [
  "fa fa-heart",
  "fa fa-heart",
  "fa fa-venus-mars",
  "fa fa-venus-mars",
  "fa fa-heartbeat",
  "fa fa-heartbeat",
  "fa fa-hospital-o",
  "fa fa-hospital-o",
  "fa fa-user-md",
  "fa fa-user-md",
  "fa fa-ambulance",
  "fa fa-ambulance",
  "fa fa-mars-stroke",
  "fa fa-mars-stroke",
  "fa fa-venus",
  "fa fa-venus"
];

/*select parent to append children thereof*/
const cardContainer = document.querySelector(".deck");

let openedCards = [];
let sameCards = [];
let moves = 0;
let shuffledCards = [];
const stars = document.querySelector(".stars");
let countStars = 3;
let lastmoves = document.querySelector(".moves");
let lastcountStars = document.querySelector(".countStars");
let lastallSeconds = document.querySelector(".allSeconds");

// MODAL
// Get the modal
var scoreModal = document.getElementById("score-modal");

// get play again button
var playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.onclick = function() {
  // simple trick to reset your game
  // this will not work in codepen but try it on your PC
  location.reload();
};

  sineCanvas.addChild(
      new SineWave({
          periodOffset: Math.PI,
          lineNumber: 1,
          amplitude: 55,
          theta: 0.035,
          maxDotSize: 2.5,
          minDotSize: 0.4
      }, sineCanvas)
  );

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

})

.controller('NewCtrl', function($scope) {
  var mat = [];
var cartas = [];
var posiciones = [];
var rand = 0;
var carta1 = 0;
var parejas = 8;


function llenarMemoria(){
  for(var i = 1; i < 9; i++){
    mat[i-1] = i;
  }
  for(var i = 1; i < 9; i++){
    mat[i+7] = i;
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function asignar(c){
  if(cartas.length < 2){
    cartas.push(mat[c-1]);
  }
  if(posiciones.length < 2){
    posiciones.push(c);
  }
  var element = document.getElementById(c);
  switch(mat[c-1]){
      case 1:
         if(element.classList.contains("carta")) {
             element.classList.toggle("A");

         }
      break;
      case 2:
        if(element.classList.contains("carta")) {
             element.classList.toggle("B");

         }
      break;
      case 3:
        if(element.classList.contains("carta")) {
             element.classList.toggle("C");
         }
      break;
      case 4:
        if(element.classList.contains("carta")) {
             element.classList.toggle("D");
         }
      break;
      case 5:
        if(element.classList.contains("carta")) {
             element.classList.toggle("E");
         }
      break;
      case 6:
        if(element.classList.contains("carta")) {
             element.classList.toggle("F")
         }
      break;
      case 7:
        if(element.classList.contains("carta")) {
             element.classList.toggle("G")
         }
      break;
      case 8:
        if(element.classList.contains("carta")) {
             element.classList.toggle("H")
         }
      break;
    }
}

function resetearCarta(){
  for(var i = 0; i < cartas.length; i++){
    var element = document.getElementById(posiciones[i]);
    switch(cartas[i]){
      case 1:
         if(element.classList.contains("carta")) {
             element.classList.toggle("A")
         }
      break;
      case 2:
        if(element.classList.contains("carta")) {
             element.classList.toggle("B")
         }
      break;
      case 3:
        if(element.classList.contains("carta")) {
             element.classList.toggle("C")
         }
      break;
      case 4:
        if(element.classList.contains("carta")) {
             element.classList.toggle("D")
         }
      break;
      case 5:
        if(element.classList.contains("carta")) {
             element.classList.toggle("E")
         }
      break;
      case 6:
        if(element.classList.contains("carta")) {
             element.classList.toggle("F")
         }
      break;
      case 7:
        if(element.classList.contains("carta")) {
             element.classList.toggle("G")
         }
      break;
      case 8:
        if(element.classList.contains("carta")) {
             element.classList.toggle("H")
         }
      break;
    }
  }
  cartas = [];
  posiciones = []
}

function cartasIguales(){
  for(var i = 0; i < cartas.length; i++){
    var element = document.getElementById(posiciones[i]);
    element.classList.add("par");
  }
   parejas --;
   ganador();
   cartas = [];
   posiciones = [];

}

function comparaCarta(){
  if(cartas.length == 2){
    if(cartas[0]!=cartas[1]){
      setTimeout(function(){ resetearCarta() }, 450);
    }
    else{
      cartasIguales();
    }
  }
}

function ganador(){
  if(parejas ==0){
    document.getElementById('win').style.display = "block";
    document.getElementById('win').innerHTML = "En Horabuena! has completado el juego";
  }
}

document.addEventListener("click", function(e) {
  if(e.target.classList.contains("carta")) {
    asignar(e.target.id);
    comparaCarta();

}})



llenarMemoria();
shuffle(mat);
console.log(mat);


function showScoreModal() {
  scoreModal.style.display = "block";
}

/*Insert Timer into Game*/
var timerVar = setInterval(clockTimer, 1000);
var allSeconds = 0;

function clockTimer() {
  ++allSeconds;
  var hour = Math.floor(allSeconds / 3600);
  var minute = Math.floor((allSeconds - hour * 3600) / 60);
  var seconds = allSeconds - (hour * 3600 + minute * 60);

  document.getElementById(`hour`).innerHTML = hour;
  document.getElementById(`minute`).innerHTML = minute;
  document.getElementById(`seconds`).innerHTML = seconds;
}

function clockStart() {
  timerVar = setInterval(countTimer, 1000);
}

function tpause() {
  clearInterval(timerVar);
}

function sreset() {
  allSeconds = -1;
  clockTimer();
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*Start the Game Initalization*/
/*create the deck of cards and put cards in deck*/
function init(){
const shuffeledCards = shuffle(cardArray);
for(let i=0; i < cardArray.length; i++) {

  const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${cardArray[i]}"></i>`;
    cardContainer.appendChild(card);

    /*Include click event On Cards*/

    click(card);
  }
}

function click(card) {
  /*Clicking On Cards*/
  card.addEventListener("click", function() {
    const nowCard = this;
    const lastCard = openedCards[0];

    /*The Card I'm On is Opened*/

    if (openedCards.length === 1) {
      card.classList.add("open", "show","inactive" );
      openedCards.push(this);//adds a card to the array

      /*This Is Where The Two Cards Are Compared*/

      compare(nowCard, lastCard);
    } else {
      /*There Are No Opened Cards*/
      nowCard.classList.add("open", "show", "inactive");
      openedCards.push(this);//adds a card to the array
    }
  });
}

function compare(nowCard, lastCard) {
  if (nowCard.innerHTML === lastCard.innerHTML) {
    /*Matching Cards*/
    nowCard.classList.add("match");
    lastCard.classList.add("match");

    sameCards.push(nowCard, lastCard);

    openedCards = [];

    /*Is the game over?*/

    itOver();
  } else {
    /*Wait Time: 550 milliseconds*/
    setTimeout(function() {
      nowCard.classList.remove("open", "show", "inactive");
      lastCard.classList.remove("open", "show", "inactive");
    openedCards = [];
    
    }, 550);
    
    
    /*add new moves*/
    addMove();
  }
}

/*Game Over Alert-Game Won! Only if all 16 cards match*/
function itOver() {
  if (sameCards.length === cardArray.length) {
    /*alert("Congratulations! Do You Want to Play Again? Your Stars are " +  countStars  +  ". Your moves are "   +  moves  + 
       ". Your timing in seconds is "    +  allSeconds );*/
   
   //Assistance received from my Udacity mentor, Peter. He helped me with getting the modal installed correctly.

    // insert all html you need into the modal div with class "modal-score-content"
    
    // I have set class of modal-moves in index.html check it out
    // you need make sure that you passing correct values to actually see any difference
    document.querySelector('.modal-moves').innerHTML = moves;
    document.querySelector('.countStars').innerHTML = countStars;
    document.querySelector('.allSeconds').innerHTML= allSeconds;
 
    allSeconds.innerHTML = allSeconds;

    // then show modal
    showScoreModal();
    clearInterval(timerVar);
  }
}

/*Make a Move*/

const movesContainer = document.querySelector(".moves");

function addMove() {
  moves++;
  movesContainer.innerHTML = moves;

  /*Call Rating Function Here*/
  rating();
}

/*Rating*/
const starsContainer = document.querySelector(".stars");
starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>`;
function rating() {
  if (moves > 15) {
    countStars = 1;
    starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>`;
  } else if (moves > 10) {
    countStars = 2;
    starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
  } else {
    countStars = 3;
    starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>`;
  }
}

/*Program Restart Button*/

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", function() {
  /*Eliminate the cards*/

  cardContainer.innerHTML = "";

  /*Make new cards*/
  init();

  /*Reset associated elements*/
  sameCards = [];
  moves = 0;
  movesContainer.innerHTML = moves;
  starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>`;
});

/*Begin The First Game!*/

init();
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
