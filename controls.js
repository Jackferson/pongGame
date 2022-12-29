class Controls {
  constructor() {
    this.player1 = { upside: false, downside: false };
    this.player2 = { upside: false, downside: false };
    this.paused = false;

    this.#keyboardListener();
  }

  #pauseGame() {
    console.log("PAUSED STATE: " + this.paused);
    this.paused ? (this.paused = false) : (this.paused = true);
  }

  #keyboardListener() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case "w":
          this.player1.upside = true;
          break;
        case "s":
          this.player1.downside = true;
          break;
        case "5":
          this.player2.upside = true;
          break;
        case "2":
          this.player2.downside = true;
          break;
        case " ":
          this.#pauseGame();
          break;
      }
    };
    document.onkeyup = (e) => {
      switch (e.key) {
        case "w":
          this.player1.upside = false;
          break;
        case "s":
          this.player1.downside = false;
          break;
        case "5":
          this.player2.upside = false;
          break;
        case "2":
          this.player2.downside = false;
          break;
      }
    };
  }
}
