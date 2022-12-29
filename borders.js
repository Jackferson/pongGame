class Borders {
  constructor(width, margin, height) {
    this.left = Math.round(width - margin);
    this.right = Math.floor(margin);
    this.top = 0;
    this.bottom = height;

    const topLeft = { x: this.left, y: this.top };
    const topRight = { x: this.right, y: this.top };
    const bottomLeft = { x: this.left, y: this.bottom };
    const bottomRight = { x: this.right, y: this.bottom };

    this.limits = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ];

    this.walls = [
      [topLeft, topRight],
      [bottomLeft, bottomRight],
    ];
  }

  draw(ctx) {
    
    this.limits.forEach((limit) => {
      ctx.beginPath();
      ctx.strokeStyle = "yellow";
      ctx.moveTo(limit[0].x, limit[0].y);
      ctx.lineTo(limit[1].x, limit[1].y);
      ctx.stroke();
    });
    
    this.walls.forEach((wall) => {
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 3;
      ctx.moveTo(wall[0].x, wall[0].y);
      ctx.lineTo(wall[1].x, wall[1].y);
      ctx.stroke();
    });
  }
}
