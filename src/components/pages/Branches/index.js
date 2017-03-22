import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import P5Canvas from '@/P5Canvas';
import Branch from './Branch';
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
    this.state = { name: 'spidersWebDrips' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ name: value });
  }

  render() {
    return (
      <div>
        <SelectField value={this.state.name} onChange={this.handleChange}>
          <MenuItem value="spidersWebDrips" primaryText="Spider's web drips" />
          <MenuItem value="stationMap" primaryText="Station map" />
        </SelectField>
        <P5Canvas
          name={this.state.name}
          setup={setup}
          draw={draw(6, strategies[`${this.state.name}Strategy`])}
        />
      </div>
    );
  }
}

Branches.propTypes = {};
