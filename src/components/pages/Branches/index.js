import React from 'react';
import PageTemplate from '@/pages/PageTemplate';
import Branch from './Branch';
import * as strategies from './strategies';

const setup = (p) => {
  p.noLoop();
  p.createCanvas(700, 700);
};

const draw = (name, strategy) => (n) => (p) => {
  p.background(0);
  p.fill(255);
  p.stroke(255);
  const r = name === 'urbanProgram' ? 0 : 30;
  new Branch(p, 350, 350, r, n, strategy).draw();
};

const settings = Object.entries(strategies).reduce((obj, [name, strategy]) => {
  return {
    ...obj,
    [name]: {
      setup,
      draw: draw(name, strategy),
    }
  };
}, {});

export default () => (
  <PageTemplate
    settings={settings}
  />
);
