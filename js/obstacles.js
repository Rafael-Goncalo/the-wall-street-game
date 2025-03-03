class Obstacles {
constructor(gameScreen) {
    this.positionLeft = 0;
    this.positionTop = 250;
    this.width = 60;
    this.height = 60;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = "./images/bear-market.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    gameScreen.appendChild(this.element)
}
}