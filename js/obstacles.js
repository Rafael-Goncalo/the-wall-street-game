class Obstacle {
  constructor(secondPageB, type) {
      // Positive (bull market) images
      const positiveImages = [
          "./images/bull-market.png",
          "./images/beat-estimates.png",
          "./images/compouding.png",
          "./images/low-tax.png",
          "./images/stability.png"
      ];

      // Negative (bear market) images
      const negativeImages = [
          "./images/bear-market.png",
          "./images/high-inflation.png",
          "./images/high-tax.png", 
          "./images/high-regulatory-framework.png",
          "./images/high-interest-rates.png"
      ];
      
      this.randomIndex = Math.floor(Math.random() * 620); // vertical position
      this.left = 750;
      this.top = this.randomIndex;
      this.width = 100; // size of the Obstacle
      this.height = 100;
      this.type = type; // positive or negative
      this.element = document.createElement("img");

      if (type === 'positive') {
          // Randomly select from positive images
          const randomPositiveImage = positiveImages[
              Math.floor(Math.random() * positiveImages.length)
          ];
          this.element.src = randomPositiveImage;
          this.value = 400000; // adds wealth
      } else {
          // Randomly select from negative images
          const randomNegativeImage = negativeImages[
              Math.floor(Math.random() * negativeImages.length)
          ];
          this.element.src = randomNegativeImage;
          this.value = -500; // subtracts wealth
      }
      
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