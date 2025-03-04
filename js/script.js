// handles all the eventListeners, everytime that you click or do something with the keyboard
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let ourNewGame
  // ALL EVENTLISTENERS HERE:

    startButton.addEventListener("click", function () {
        ourNewGame = new Game(); //here we BIND the class Game of the game.js
        ourNewGame.start()
    });
  
//keyboard event listeners // Move the Player
  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
      ourNewGame.player.directionY = -4;
    } else if (event.code === "ArrowDown") {
      ourNewGame.player.directionY = 4;
    } else if (event.code === "ArrowLeft") {
      ourNewGame.player.directionX = -4;
    } else if (event.code === "ArrowRight") {
      ourNewGame.player.directionX = 4;
    }
  });
  // to stop the player of going up/ down/ right/ left
  window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") {
      ourNewGame.player.directionY = 0;
    } else if (e.code === "ArrowDown") {
      ourNewGame.player.directionY = 0;
    } else if (e.code === "ArrowLeft") {
      ourNewGame.player.directionX = 0;
    } else if (e.code === "ArrowRight") {
      ourNewGame.player.directionX = 0;
    }
  });

 // ALL FUNCTIONS HERE:

    function startGame() {
      console.log("Something is haappeniinnggg here");
      ourNewGame.start();
    }
  };