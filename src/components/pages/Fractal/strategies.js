const setup = (p) => {
  p.noLoop();
  p.createCanvas(700, 700);
  p.background(0);
  p.stroke(255);
}


const cantorSetDraw = (d, lx, rx, y) => (n) => (p) => {
  if (d > n) return;
  p.line(lx, y, rx, y);
  const length = (rx - lx) / 3;
  cantorSetDraw(d + 1, lx, lx + length, y + 30)(n)(p);
  cantorSetDraw(d + 1, lx + length * 2, rx, y + 30)(n)(p);
}

export const cantorSet = {
  setup,
  draw: cantorSetDraw(1, 50, 650, 100),
};


const baseSeq = [0, 2, 4];

const getTriangle = (seq, cx, cy, r, p, reverse) => seq
  .map(n => Math.PI / 3 * n)
  .map(theta => reverse ? theta + Math.PI / 2 : theta - Math.PI / 2)
  .map(theta => [Math.cos(theta), Math.sin(theta)].map(a => a * r))
  .map(([x, y]) => [x + cx, y + cy]);

const sierpinskiGasketDraw = (d, cx, cy, r) => (n) => (p) => {
  if (d > n) return;
  // draw triangle
  const [[x1, y1], [x2, y2], [x3, y3]] = getTriangle(baseSeq, cx, cy, r, p, true);
  p.triangle(x1, y1, x2, y2, x3, y3);
  // calculate next dimention's triange coordinates and call recursively
  const [[tx1, ty1], [tx2, ty2], [tx3, ty3]] = getTriangle(baseSeq, cx, cy, r, p, false);
  sierpinskiGasketDraw(d + 1, tx1, ty1, r / 2, true)(n)(p);
  sierpinskiGasketDraw(d + 1, tx2, ty2, r / 2, true)(n)(p);
  sierpinskiGasketDraw(d + 1, tx3, ty3, r / 2, true)(n)(p);
}

export const sierpinskiGasket = {
  setup: (p) => {
    setup(p);
    p.strokeWeight(0);
    // draw base triangle
    const [[x1, y1], [x2, y2], [x3, y3]] = getTriangle(baseSeq, 350, 400, 300, p, false);
    p.triangle(x1, y1, x2, y2, x3, y3);
    p.stroke(0);
    p.fill(0);
  },
  draw: sierpinskiGasketDraw(1, 350, 400, 300 / 2, true),
}
