const setup = (p) => {
  p.noLoop();
  p.createCanvas(700, 700);
  p.background(255);
}

const circlesDraw = (i) => (n) => (p) => {
  p.fill(i % 2 === 0 ? 0 : 255);
  if (i > n) return;
  const r = (n - i) / n * 700;
  p.ellipse(350, 350, r);
  circlesDraw(i + 1)(n)(p);
}
export const circles = {
  setup,
  draw: circlesDraw(0),
};

const cantorSetDraw = (i, lx, rx, y) => (n) => (p) => {
  if (i > n) return;
  p.line(lx, y, rx, y);
  const length = (rx - lx) / 3;
  cantorSetDraw(i + 1, lx, lx + length, y + 30)(n)(p);
  cantorSetDraw(i + 1, lx + length * 2, rx, y + 30)(n)(p);
}
export const cantorSet = {
  setup: (p) => {
    setup(p);
  },
  draw: cantorSetDraw(1, 50, 650, 100),
};
