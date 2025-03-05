class Obstacle {  // change to Obstacle
constructor(secondPageB) {
    
    this.randomIndex = Math.floor(Math.random() * 620); // so the icon comes from the right between 0 and 620px
    this.left = 750;
    this.top = this.randomIndex; // DEBUGG it is only going down, it should go right.
    this.width = 80;
    this.height = 80;
    // this.directionX = 0;
    // this.directionY = 0;
    this.element = document.createElement("img");

  //   if (type === 'positive') {
  //     this.element.src = "./images/bull-market.png"; // green/positive icon
  //     this.value = 200000; // adds wealth
  // } else {
  //     this.element.src = "./images/bear-market.png"; // red/negative icon
  //     this.value = -25; // subtracts wealth
  // }
    this.element.src = "./images/bull-market.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    secondPageB.appendChild(this.element)
}
move() {
    this.left -= 3;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }
}