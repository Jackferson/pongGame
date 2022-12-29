class Ball {
  constructor(canvasWidth, canvasHeight, radius) {
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
    this.radius = radius;
    this.crashed = false;

    this.orientation = true;
    this.speed = 2;
    this.maxSpeed = 30;

    // True = down && False = up
    this.vertical = true;
    this.angle = 0;

    const restartValues = { x: canvasWidth / 2, y: canvasHeight / 2 };
  }

  pauseCalled() {
    let tempSpeed = this.speed;
    if (player1.controls.paused || player2.controls.paused) {
      console.log("trigger");
    } else {
      this.speed = tempSpeed;
    }
  }

  update() {
    this.#racketBounce();
    this.#wallBounce();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 1, 2 * Math.PI, 0);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 2 * Math.PI, 0);
    ctx.fillStyle = "lightgreen";
    ctx.fill();
  }

  getAngle() {
    const value = (Math.random() * Math.PI) / 2;
    return value;
  }

  #wallBounce() {
    if (this.y + 10 >= table.walls[1][0].y) {
      this.vertical = true;
    }
    if (this.y - 10 <= table.walls[0][0].y) {
      this.vertical = false;
    }
  }

  //  Change table limits for racket values.
  #racketBounce() {
    if (this.x >= table.limits[1][0].x || this.x <= table.limits[0][0].x) {
      this.orientation = !this.orientation;
      this.speed += 1;
      this.angle = this.getAngle();
    }
    if (this.speed >= this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
  movement() {
    this.orientation ? (this.x += this.speed) : (this.x -= this.speed);
    this.vertical
      ? (this.y -= this.angle * this.speed)
      : (this.y += this.angle * this.speed);
  }
}
