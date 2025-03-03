// this js handles the game, shows the screens, the player adn it has the loop of the game that's running.
class Game {
    constructor() {
        this.gameIntroScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gamePage = document.getElementById('game-page');
        this.gameOverFreeScreen = document.getElementById("game-over-free");
        this.gameOverBrokeScreen = document.getElementById("game-over-broke");
        this.player = new Player(
            this.gameScreen,
            85,
            400,
            125,
            180,
            "./images/final-investor.png"
          );
        this.height = 500; // size of the game screen
        this.width = 500; // size of the game screen
        this.positiveObstacles = []; // array of obst to loop thorough and show them
        this.negativeObstacles = [];
        // this.score = 0
        this.wealth = 1000; // this variable shows the diferents gameover pages
        this.gameOver = false; // when wealth gets to 0 changes to TRUE
        // this.gameOverFree = false;// when wealth gets to 1000000 changes to TRUE
        this.gameIntervalId = null;
        this.gameLoopFrequency = (1000/60);
}

start() { // initializes the game executing sequences
    
    this.gameScreen.style.height = `${this.height}px`; // set the height and 
    this.gameScreen.style.width = `${this.width}px`; // width of the game screen
    this.gameIntroScreen.style.display = "none"; // hide the start screen and show the game screen
    this.gameScreen.style.display = "block";  // shows the game screen
    this.gamePage.style.display = "block";
    this.gameIntervalId=setInterval( () => { // starts the loop
        this.gameLoop()
       },   this.gameLoopFrequency);

}
gameLoop() { // to check the status of the game over if FREE/ BROKE
    console.log("game loop");
    this.update()
    if (this.gameOver) {
        clearInterval(this.gameIntervalId);
    if (this.wealth >= 1000000) { 
        this.gameOverFreeScreen();
    }
    if (this.wealth <= 0) {
        this.gameOverBrokeScreen();
    }
    }
}
update() {}
}