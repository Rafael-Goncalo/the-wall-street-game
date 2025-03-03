// handles all the eventListeners, everytime that you click or do something with the keyboard
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let ourNewGame
  // ALL EVENTLISTENERS HERE:

    startButton.addEventListener("click", function () {
        ourNewGame = new Game(); //here we BIND the class Game of the game.js
        startGame();
    });
  

 // ALL FUNCTIONS HERE:

    function startGame() {
      console.log("Something is haappeniinnggg here");
      ourNewGame.start();
    }
  };