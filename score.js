//  ToDo!!
//  Draw scores

class Score {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;

    this.player1Points = 0;
    this.player2Points = 0;
  }

  update() {
    this.#pointDetector();
  }

  #newPoint() {
    ball.x = ball.restartValues.x;
    ball.y = ball.restartValues.y;
    ball.angle = ball.restartValues.angle;
    ball.speed = ball.restartValues.speed;
    gameControls.pauseGame();
    this.printPoints();
  }

  printPoints() {
    const left = document.getElementById("leftside");
    const right = document.getElementById("rightside");
    const leftSpan = document.getElementById("leftValue");
    const rightSpan = document.getElementById("rightValue");

    right.innerHTML = "";
    left.innerHTML = "";
    leftSpan.textContent = this.player1Points;
    rightSpan.textContent = this.player2Points;

    for (let i = 0; i < this.player2Points; i++) {
      right.innerHTML += "&#x1F94E;";
    }
    for (let i = 0; i < this.player1Points; i++) {
      left.innerHTML += "&#x1F94E;";
    }
  }
  #pointDetector() {
    if (ball.x >= table.limits[1][0].x) {
      this.player1Points++;
      this.#newPoint();
    }
    if (ball.x <= table.limits[0][0].x) {
      this.player2Points++;
      this.#newPoint();
    }
  }
}
