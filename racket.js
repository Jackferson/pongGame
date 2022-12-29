class Racket {
  constructor(x, y, width, height, player) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  move() {
    this.limitMovement();

    if (gameControls.player1.upside) {
      player1.y -= 5;
    }
    if (gameControls.player1.downside) {
      player1.y += 5;
    }
    if (gameControls.player2.upside) {
      player2.y -= 5;
    }
    if (gameControls.player2.downside) {
      player2.y += 5;
    }
  }

  limitMovement() {
    if (this.y - this.height / 2 <= table.top) {
      this.y = this.height / 2 + 2;
    }
    if (this.y + this.height / 2 >= table.bottom) {
      this.y = table.bottom - this.height / 2 - 2;
    }
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fillStyle = color;
    ctx.fill();
  }
}
