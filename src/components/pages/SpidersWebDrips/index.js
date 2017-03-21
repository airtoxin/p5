import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import P5 from 'p5';
import Branch from './Branch';
import * as actions from '~~/actions';
import tree from '~~/tree';

class SpidersWebDrips extends Component {
  componentDidMount() {
    this.p = new P5((p) => {
      p.setup = () => this.p5setup(p);
      p.draw = () => this.p5draw(p);
    }, this.r);

    tree.on('redraw', this.rerender.bind(this));
    tree.on('saveAsImage', this.saveAsImage.bind(this));
  }

  componentWillUnmount() {
    tree.off('redraw', this.rerender);
    tree.off('saveAsImage', this.saveAsImage);
  }

  render() {
    return (<div ref={r => this.r = r}/>);
  }

  rerender() {
    this.p5draw(this.p);
  }

  saveAsImage() {
    const canvas = this.r.getElementsByTagName('canvas')[0];
    canvas.toBlob(b => {
      this.props.dispatch(actions.saveAsImage, b, `Spider's web drips.png`);
    });
  }

  p5setup(p) {
    p.noLoop();
    p.createCanvas(700, 700);
  }

  p5draw(p) {
    p.background(0);
    p.fill(255);
    p.stroke(255);
    new Branch(p, 350, 350, 30, 6).draw();
  }
}

export default branch({}, SpidersWebDrips);
