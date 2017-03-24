export default class Branch {
  constructor(p, x, y, r, n, branchingStrategy) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.r = r;
    this.n = n;

    this.branches = branchingStrategy(p, x, y, r, n);
  }

  draw() {
    if (this.r) this.p.ellipse(this.x, this.y, this.r);
    this.branches.forEach((b) => {
      this.p.line(this.x, this.y, b.x, b.y);
      b.draw();
    });
  }
}
