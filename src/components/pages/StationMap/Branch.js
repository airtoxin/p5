export default class Branch {
  constructor(p, x, y, r, n) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.r = r;
    this.n = n;

    const baseTheta = Math.PI / 3 * Math.floor(Math.random() * 3);
    this.branches = Array.from(Array(n).keys()).map((i) => {
      const distance = 50 + Math.random() * 300;
      const br = this.r;
      const theta = baseTheta + Math.PI * 2 / n * i;

      const [bx, by] = [Math.cos(theta), Math.sin(theta)].map(a => a * distance);
      return new Branch(p, x + bx, y + by, br, Math.floor(Math.random() * n));
    });
  }

  draw() {
    this.p.ellipse(this.x, this.y, this.r);
    this.branches.forEach((b) => {
      this.p.line(this.x, this.y, b.x, b.y);
      b.draw();
    });
  }
}
