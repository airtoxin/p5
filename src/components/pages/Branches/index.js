import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
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
    this.state = {
      n: 6,
      name: 'spidersWebDrips'
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
  }

  handleChangeName(event, index, name) {
    this.setState({
      ...this.state,
      name,
    });
  }

  handleChangeN(event, n) {
    this.setState({
      ...this.state,
      n
    });
  }

  render() {
    return (
      <div>
        <SelectField value={this.state.name} onChange={this.handleChangeName}>
          <MenuItem value="spidersWebDrips" primaryText="Spider's web drips" />
          <MenuItem value="stationMap" primaryText="Station map" />
        </SelectField>
        <P5Canvas
          name={this.state.name}
          setup={setup}
          draw={draw(this.state.n, strategies[`${this.state.name}Strategy`])}
        />
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.n}
          onChange={this.handleChangeN}
        />
      </div>
    );
  }
}

Branches.propTypes = {};
