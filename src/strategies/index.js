export const spidersWebDripsStrategy = (Branch, x, y, r, n) => {
  const baseTheta = Math.PI / 3 * Math.floor(Math.random() * 3);

  return Array.from(Array(n).keys()).map((i) => {
    const distance = 50 + Math.random() * 300;
    const br = this.r;
    const theta = baseTheta + Math.PI * 2 / n * i;

    const [bx, by] = [Math.cos(theta), Math.sin(theta)].map(a => a * distance);
    return new Branch(p, x + bx, y + by, br, Math.floor(Math.random() * n));
  });
}

export const stationMapStrategy = (Branch x, y, r, n) => {
  const baseTheta = Math.PI / 3 * Math.floor(Math.random() * 3);

  this.branches = Array.from(Array(n).keys()).map((i) => {
    const distance = 50 + Math.random() * 300;
    const br = this.r;
    const theta = baseTheta + Math.PI * 2 / n * i;

    const [bx, by] = [Math.cos(theta), Math.sin(theta)].map(a => a * distance);
    return new Branch(p, x + bx, y + by, br, Math.floor(Math.random() * n));
  });
}
