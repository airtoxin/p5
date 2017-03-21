import React, { Component } from 'react';
import P5 from 'p5';
import Branch from './Branch';

export default class DripTheSpidersWeb extends Component {
  componentDidMount() {
    new P5((p) => {
      p.setup = () => this.p5setup(p);
      p.draw = () => this.p5draw(p);
    }, this.r);
  }

  render() {
    return (<div ref={r => this.r = r}/>);
  }

  p5setup(p) {
    p.noLoop();
    p.createCanvas(700, 700);
  }

  p5draw(p) {
    p.background(0);
    p.fill(255);
    p.stroke(255);
    new Branch(p, 350, 350, 0, 6).draw();
  }
}
