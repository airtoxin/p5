import React, { Component } from 'react';
import P5 from 'p5';
import tree from '~~/tree';

export default class P5Canvas extends Component {
  constructor({ name, setup, draw }) {
    super();

    this.ref = null;
    this.name = name;
    this.setup = setup;
    this.draw = draw;
  }

  componentDidMount() {
    this.p = new P5((p) => {
      p.setup = () => this.setup(p);
      p.draw = () => this.draw(p);
    }, this.ref);

    tree.on('redraw', this.rerender.bind(this));
    tree.on('saveAsImage', this.saveAsImage.bind(this));
  }

  componentWillUnmount() {
    tree.off('redraw', this.rerender);
    tree.off('saveAsImage', this.saveAsImage);
  }

  render() {
    return (
      <div ref={r => this.ref = r}/>
    );
  }

  rerender() {
    this.draw(this.p);
  }

  saveAsImage() {
    const canvas = this.ref.getElementsByTagName('canvas')[0];
    canvas.toBlob(b => {
      this.props.dispatch(actions.saveAsImage, b, this.name);
    });
  }
}
