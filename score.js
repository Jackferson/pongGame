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
    gameControls.pauseGame()
  }

  #pointDetector() {
    if (ball.x >= table.limits[1][0].x) {
      this.player1Points++;
      console.log("player1 points: " + this.player1Points);
      this.#newPoint();
    }
    if (ball.x <= table.limits[0][0].x) {
      this.player2Points++;
      console.log("player2 points: " + this.player2Points);
      this.#newPoint();
    }
  }
}

//  