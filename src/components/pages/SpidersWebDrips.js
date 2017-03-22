import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import P5Canvas from '@/P5Canvas';
import Branch, { spidersWebDripsStrategy } from '@/Branch';

const setup = p => {
  p.noLoop();
  p.createCanvas(700, 700);
};

const draw = n => p => {
  p.background(0);
  p.fill(255);
  p.stroke(255);
  new Branch(p, 350, 350, 30, n, spidersWebDripsStrategy).draw();
};

export default class SpidersWebDrips extends Component {
  constructor({ n = 4 }) {
    super();

    this.state = { n };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(_, n) {
    this.setState({ n });
  }

  render() {
    return (
      <div>
        <P5Canvas
          name="Spider's web drips"
          setup={setup}
          draw={draw(this.state.n)}
        />
        <Slider
          value={this.state.n}
          step={1}
          min={1}
          max={10}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SpidersWebDrips.propTypes = {
  n: PropTypes.number,
};
