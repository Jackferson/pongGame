const canvas = document.getElementById("myCanvas");
canvas.width = 800;
canvas.height = 700;

const ctx = canvas.getContext("2d");
const player1 = new Racket(30, 300, 20, 100);
const player2 = new Racket(770, 300, 20, 100);
const ball = new Ball(canvas.width, canvas.height, 10);
const table = new Borders(canvas.width, canvas.width * 0.994, canvas.height);
const score = new Score(player1, player2);
const gameControls = new Controls();
animate();

function animate() {
  player1.move("player1");
  player2.move("player2");
  canvas.height = 700;
  ball.draw(ctx, "white");
  // ball.movement();
  ball.update();
  score.update();
  table.draw(ctx);
  player1.draw(ctx, "cyan");
  player2.draw(ctx, "pink");
  requestAnimationFrame(animate);
}
