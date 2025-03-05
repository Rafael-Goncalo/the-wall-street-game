// handles all the eventListeners, everytime that you click or do something with the keyboard
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButtons = document.querySelectorAll(".restart-buttons");
    let ourNewGame
  // ALL EVENTLISTENERS HERE:

    startButton.addEventListener("click", function () {
        ourNewGame = new Game(); //here we BIND the class Game of the game.js
        ourNewGame.start()
    });

    restartButtons.forEach((button)=>{
      button.addEventListener("click", () =>{
        location.reload()
      })
    })
  
//keyboard event listeners // Move the Player
  window.addEventListener("keydown", (event) => {
    console.log("keydown", event.code)
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
    console.log("keyup", e.code)
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