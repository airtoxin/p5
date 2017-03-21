import React, { Component } from 'react';
import P5Canvas from '@/P5Canvas';
import Branch from './Branch';

const setup = (p) => {
  p.noLoop();
  p.createCanvas(700, 700);
}

const draw = (p) => {
  p.background(0);
  p.fill(255);
  p.stroke(255);
  new Branch(p, 350, 350, 30, 6).draw();
}

export default () => (
  <P5Canvas
    name="Spider's web drips"
    setup={setup}
    draw={draw}
  />
);
