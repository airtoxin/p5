import React, { Component } from 'react';
import P5Canvas from '@/P5Canvas';

const setup = p => {
  p.createCanvas(700, 700);
  p.fill(255);
  p.stroke(255);
};

const draw = p => {
  p.background(0);

  p.ellipse(Math.random() * 700, Math.random() * 700, 30);
};

export default class RandomWalk extends Component {
  render() {
    return (
      <P5Canvas
        name={"this.state.name"}
        setup={setup}
        draw={draw}
      />
    );
  }
}
