import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import P5Canvas from '@/P5Canvas';
import * as strategies from './strategies';

const setup = p => {
  p.noLoop();
  p.createCanvas(700, 700);
};

const draw = (n, branchingStrategy) => p => {
  p.background(0);
  p.fill(255);
  p.stroke(255);
  new Branch(p, 350, 350, 30, n, branchingStrategy).draw();
};

export default class Branches extends Component {
  constructor() {
    super();
    this.state = { strategy: 'spidersWebDripsStrategy' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("@event", event);
  }

  render() {
    return (
      <div>
        <SelectField onChange={this.handleChange}>
          <MenuItem value="spidersWebDripsStrategy" primaryText="Spider's web drips" />
          <MenuItem value="stationMapStrategy" primaryText="Station map" />
        </SelectField>
        <P5Canvas
          name={this.state.value}
          setup={setup}
          draw={draw(this.state.n, strategies[this.state.strategy])}
        />
      </div>
    );
  }
}

Branches.propTypes = {

};
