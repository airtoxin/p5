import React, { Component } from 'react';
import P5 from 'p5';

export default class Hoge extends Component {
  constructor() {
    super();

    this.id = '' + Math.random();
  }

  componentDidMount() {
    new P5((p) => {
      p.setup = () => this.p5setup(p);
      p.draw = () => this.p5draw(p);
    }, this.id);
  }

  render() {
    return (<div id={this.id}/>);
  }

  p5setup(p) {
    p.createCanvas(600, 400);
  }

  p5draw(p) {
    p.background(0);
    p.rect(10, 10, 100, 100);
  }
}
