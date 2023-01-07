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

    this.restartValues = { x: canvasWidth / 2, y: canvasHeight / 2, angle: 0, speed: 2 };
  }

  update() {
    this.#racketDetector();
    this.#wallBounce();
  }

  draw(ctx, canvasWidth) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 1, 2 * Math.PI, 0);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 2 * Math.PI, 0);
    ctx.fillStyle = "lightgreen";
    ctx.fill();

    const A = { x: this.x, y: this.y };
    const C = { x: this.orientation ? canvasWidth : 0, y: this.y };
    const B = {
      x: this.orientation ? canvasWidth : 0,
      y: this.vertical
        ? this.y - this.getDirection(A, C)
        : this.y + this.getDirection(A, C),
    };

    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.stroke();
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

  #racketDetector() {
    this.points = [
      { x: this.x - this.radius / 2, y: this.y - this.radius / 2 },
      { x: this.x + this.radius / 2, y: this.y - this.radius / 2 },
      { x: this.x - this.radius / 2, y: this.y + this.radius / 2 },
      { x: this.x + this.radius / 2, y: this.y + this.radius / 2 },
    ];

    const position1 = player1.getCurrentPosition();
    const position2 = player2.getCurrentPosition();

    if (doesIntersect(position2, this.points)) {
      this.#bounce(false);
    }
    if (doesIntersect(position1, this.points)) {
      this.#bounce(true);
    }
  }

  #bounce(value) {
    this.orientation = value;
    this.angle = this.getAngle();
    if (this.speed >= this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed += 1;
    }
  }

  movement() {
    if (gameControls.paused) {
      null;
    } else {
      this.orientation
        ? (this.x += Math.cos(this.angle) * this.speed)
        : (this.x -= Math.cos(this.angle) * this.speed);
      this.vertical
        ? (this.y -= Math.sin(this.angle) * this.speed)
        : (this.y += Math.sin(this.angle) * this.speed);
    }
  }

  // Functions used when developing
  distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }

  getDirection(A, C) {
    return Math.tan(this.angle) * this.distance(A, C);
  }
}
