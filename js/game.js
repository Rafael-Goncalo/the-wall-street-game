// this js handles the game, shows the screens, the player adn it has the loop of the game that's running.
class Game {
  constructor() {
    this.firstPage = document.getElementById("first-page"); // i/o gameIntroScreen
    this.secondPageA = document.getElementById("second-page-a"); // i/o gamePage
    this.secondPageB = document.getElementById("second-page-b"); //
    this.gameOverWin = document.getElementById("third-page-a"); // i/o gameOverFree
    this.gameOverLoss = document.getElementById("third-page-b"); // i/o gameOverBroke
    this.wealthAmount = document.getElementById("wealth-amount"); // the car is lives
    this.player = new Player(
      this.secondPageB,
      0, // left
      250, // top
      80, // width
      80, // height
      "./images/final-investor.png"
    );
    this.height = 650; // bottom, size of the backgroun game screen
    this.width = 800; // size of the backgroun game screen
    this.obstacles = [];
    this.positiveObstacles = [];
    this.negativeObstacles = [];
    // this.obstacles = [new Obstacles(this.secondPageB)];
    // this.positiveObstacles = []; // array of obst to loop thorough and show them
    // this.negativeObstacles = [];
    // this.score = 0
    this.wealth = 1000; // this variable shows the diferents gameover pages
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.counter = 0;
  }

  start() {
    // METHOD. To Initialize the secondPageB sequences
    this.secondPageB.style.height = `${this.height}px`; // set the height and
    this.secondPageB.style.width = `${this.width}px`; // width of the game screen
    this.firstPage.style.display = "none"; // hide the start screen and show the game screen
    this.secondPageA.style.display = "block"; // shows the gamePage
    this.secondPageB.style.display = "block"; // i/o gameScreen
    this.gameIntervalId = setInterval(() => {
      // starts the loop
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    // METHOD. To check the status of the game over if FREE/ BROKE
    this.counter++;
    if (this.counter % 160 === 0) {
        const obstacleType = ["positive", "negative"];
        const randomIndex = Math.floor(Math.random() * obstacleType.length) 
      // didn't understand this part
      this.obstacles.push(new Obstacle(this.secondPageB, obstacleType[randomIndex])); // ERROR here
    }
    // if (this.thirdPageA) {
    //   this.gameOver(); // gameOver is another method...?
    // }
    // if (this.thirdPageB) {
    //   this.gameOver();
    // }
    this.update();
  }
  update() {
    // METHOD. To move the player
    this.player.move(); // to move the player
    for (let i = 0; i < this.obstacles.length; i++) {
      // so the obstacles move alone
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      if (this.player.didCollide(currentObstacle)) {
        //remove icon from the array in JS

        this.obstacles.splice(i, 1);
        i--;
        //dont forget to remove the img element from the html ???
        currentObstacle.element.remove();
        this.wealth += currentObstacle.value; // wealthAmount ??
        this.wealthAmount.innerText = this.wealth;
        //after we subtract one life, we check if its zero
        if (this.wealth >= 1000000) { // wealthAmount
          this.gameOver()
        }
        if (this.wealth === 0) {
            this.gameOver()
        }
      }
    }
  }
  // if (currentObstacle.top > 650) {
  //     this.score++;
  //     this.scoreElement.innerText = this.score;
  //     //remove the red car from the array in JS
  //     this.obstacles.splice(i, 1);
  //     i--;
  //     //dont forget to remove the img element from the html
  //     currentObstacle.element.remove();
  //   }

  gameOver() {
    //stop the loop from running
    clearInterval(this.gameIntervalId);
    //hide the game screen
    this.secondPageB.style.display = "none";
    //show the game over screen

    if (this.wealth <= 0) {
      this.gameOverLoss.style.display = "block";
    } else {
      this.gameOverWin.style.display = "block";
    }
  }
}
