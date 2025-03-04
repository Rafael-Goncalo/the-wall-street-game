//creates the player image and puts it on to the screen.
class Player {
    constructor(secondPageA, // i/o gamePage
        positionLeft,
        positionTop,
        playerWidth,
        playerHeight,
        playerImageSrc
    ) {
        this.secondPageA = secondPageA // i/o gamePage
        this.positionLeft = positionLeft;
        this.positionTop = positionTop;
        this.width = playerWidth;
        this.height = playerHeight;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img');
        this.element.src = playerImageSrc
        this.element.style.position = "absolute";
        this.element.style.top = `${positionTop}px`; //didn't understand this part.
        this.element.style.left = `${positionLeft}px`; //didn't understand this part.
        this.element.style.width = `${playerWidth}px`; //didn't understand this part.
        this.element.style.height = `${playerHeight}px`; //didn't understand this part.

        //after creating the img element and setting the properties
        //make sure to append or 'add' the img to the page
        this.secondPageA.appendChild(this.element)
        
    }

    move() { // move the player
        this.positionLeft += this.directionX
        this.positionTop += this.directionY
        // to keep the player inside (left or right) the screen
        if (this.positionLeft < 0) { // margin-left
            this.positionLeft = 0;
        }
        if (this.positionLeft + this.width > 1500 ) { // margin-right
            this.positionLeft = 1500 - this.width;
          }
          // to keep the player inside (top or bottom) the screen
          if (this.positionTop < 0) { // margin-top
            this.positionTop = 0;
          }
          if (this.positionTop + this.height > 700) { // margin-bottom
            this.positionTop = 700 - this.height;
          }
        this.updatePosition();
        // console.log("inside the playermove method")
    }
    updatePosition() { // add or sub method. In charge of moving the player in the page
        this.element.style.top = `${this.positionTop}px`;
        this.element.style.left = `${this.positionLeft}px`;
    }
    didColide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }
      }
    }

