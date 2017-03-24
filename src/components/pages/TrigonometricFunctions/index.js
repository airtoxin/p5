import React, { Component } from 'react';
import PageTemplate from '@/pages/PageTemplate';
import * as strategies from './strategies';

const setup = (p) => {
  p.createCanvas(700, 700);
  p.fill(255);
  p.stroke(255);
};

const draw = (name, strategy) => (n) => (p) => {
  const alpha = name === 'heartBeat' ? 255 : 10;
  p.background(0, alpha);
  strategy(n, p);
};

const settings = Object.entries(strategies).reduce((obj, [name, strategy]) => {
  return {
    ...obj,
    [name]: {
      setup,
      draw: draw(name, strategy),
      minN: 0,
      maxN: 36,
    },
  };
}, {});

export default () => (
  <PageTemplate
    settings={settings}
  />
);
