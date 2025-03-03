//creates the player image and puts it on to the screen.
class Player {
    constructor(gamePage, positionLeft, positionTop, playerWidth, playerHeight, playerImageSrc) {
        this.gamePage = gamePage
        this.positionLeft = positionLeft;
        this.positionTop = positionTop;
        this.width = playerWidth;
        this.height = playerHeight;
        this.directionX = 0;
        this.directionY = 0;
        // this.chichinSound = new Audio ("../assets/chichiSound.wav");
        // this.chichinSound = 
        this.element = document.createElement('img');
        this.element.src = playerImageSrc
        this.element.style.position = "absolute";
        this.element.style.top = `${positionTop}px`; //didn't understand this part.
        this.element.style.left = `${positionLeft}px`; //didn't understand this part.
        this.element.style.width = `${playerWidth}px`; //didn't understand this part.
        this.element.style.height = `${playerHeight}px`; //didn't understand this part.

        //after creating the img element and setting the properties
        //make sure to append or 'add' the img to the page
        this.gamePage.appendChild(this.element)
    }

    move() {

    }
}

