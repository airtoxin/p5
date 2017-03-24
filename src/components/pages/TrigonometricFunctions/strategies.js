const DEG_1 = Math.PI / 180;

export const heartBeat = (n, p) => {
  const r = 200 + Math.sin(DEG_1 * p.frameCount * n) * 100;
  p.ellipse(350, 350, r);
};

export const singleSpin = (n, p) => {
  const thetaBase = Math.PI * 2 / n;

  Array.from(Array(n).keys()).forEach((i) => {
    const theta = thetaBase * i + DEG_1 * p.frameCount;
    const r = 300;
    const [x, y] = [Math.cos(theta), Math.sin(theta)].map(a => a * r);
    p.ellipse(350 + x, 350 + y, 30);
  });
};

export const doubleSpin = (n, p) => {
  const thetaBase = Math.PI * 2 / n;

  Array.from(Array(n).keys()).forEach((i) => {
    const theta = thetaBase * i + DEG_1 * p.frameCount + thetaBase / 2;
    const r = 200 + Math.sin(DEG_1 * p.frameCount * 1.3) * 100;
    const [x, y] = [Math.cos(theta), Math.sin(theta)].map(a => a * r);
    p.ellipse(350 + x, 350 + y, 30);
  });

  Array.from(Array(n).keys()).forEach((i) => {
    const theta = thetaBase * i + DEG_1 * p.frameCount;
    const r = 170 + Math.sin(DEG_1 * p.frameCount * 0.8) * 100;
    const [x, y] = [Math.sin(theta), Math.cos(theta)].map(a => a * r);
    p.ellipse(350 + x, 350 + y, 30);
  });
};

export const fakeRoller = (n, p) => {
  const thetaBase = Math.PI * 2 / n;

  Array.from(Array(n).keys()).forEach((i) => {
    const theta = thetaBase * i;
    const r = Math.sin(thetaBase * i + DEG_1 * p.frameCount) * 300;
    const [x, y] = [Math.cos(theta), Math.sin(theta)].map(a => a * r);
    p.ellipse(350 + x, 350 + y, 30);
  });
};
