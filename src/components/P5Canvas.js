import React, { Component, PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import P5 from 'p5';
import tree from '~~/tree';
import * as actions from '~~/actions';

class P5Canvas extends Component {
  constructor({ name, setup, draw, redraw }) {
    super();

    this.ref = null;
    this.name = name;
    this.setup = setup;
    this.draw = draw;
    this.redraw = redraw;

    this.rerender = this.rerender.bind(this);
    this.saveAsImage = this.saveAsImage.bind(this);
  }

  componentDidMount() {
    this.p = new P5((p) => {
      /* eslint-disable no-param-reassign */
      p.setup = () => this.setup(p);
      p.draw = () => this.draw(p);
      /* eslint-enable no-param-reassign */
    }, this.ref);
    tree.on('redraw', this.rerender);
    tree.on('saveAsImage', this.saveAsImage);
  }

  componentWillReceiveProps({ name, setup, draw }) {
    this.name = name;
    this.setup = setup;
    this.draw = draw;

    this.rerender();
  }

  componentWillUnmount() {
    tree.off('redraw', this.rerender);
    tree.off('saveAsImage', this.saveAsImage);
  }

  rerender() {
    if (this.redraw) this.redraw(this.p);
    this.draw(this.p);
  }

  saveAsImage() {
    const canvas = this.ref.getElementsByTagName('canvas')[0];
    canvas.toBlob((b) => {
      this.props.dispatch(actions.saveAsImage, b, this.name);
    });
  }

  render() {
    return (
      <div ref={r => (this.ref = r)} />
    );
  }
}

P5Canvas.propTypes = {
  dispatch: PropTypes.any.isRequired,
};

export default branch({}, P5Canvas);
