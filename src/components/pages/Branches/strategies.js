import Branch from './Branch';

export const spidersWebDrips = (p, x, y, r, n) => {
  return Array.from(Array(n)).map(() => {
    const distance = 50 + Math.random() * 300;
    const br = Math.random() * distance * 0.5;
    const theta = Math.random() * Math.PI * 2;
    const [bx, by] = [Math.cos(theta), Math.sin(theta)].map(a => a * distance);
    return new Branch(p, x + bx, y + by, br, Math.floor(Math.random() * n), spidersWebDrips);
  });
}

export const stationMap = (p, x, y, r, n) => {
  const baseTheta = Math.PI / 3 * Math.floor(Math.random() * 3);

  return Array.from(Array(n).keys()).map((i) => {
    const distance = 50 + Math.random() * 300;
    const br = r;
    const theta = baseTheta + Math.PI * 2 / n * i;

    const [bx, by] = [Math.cos(theta), Math.sin(theta)].map(a => a * distance);
    return new Branch(p, x + bx, y + by, br, Math.floor(Math.random() * n), stationMap);
  });
}
