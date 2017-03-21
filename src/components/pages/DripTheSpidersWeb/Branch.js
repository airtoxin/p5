export default class Branch {
  constructor(p, x, y, r, n) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.r = r;
    this.n = n;

    this.branches = Array.from(Array(n)).map(() => {
      const distance = 50 + Math.random() * 300;
      const br = Math.random() * distance * 0.5;
      const theta = Math.random() * Math.PI * 2;

      const [bx, by] = [Math.cos(theta), Math.sin(theta)].map(a => a * distance);
      return new Branch(p, x + bx, y + by, br, Math.floor(Math.random() * n));
    });
  }

  draw() {
    this.p.ellipse(this.x, this.y, this.r);
    this.branches.forEach(b => {

      this.p.line(this.x, this.y, b.x, b.y);
      b.draw();
    });
  }
}
