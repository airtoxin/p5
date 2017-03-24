import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import P5Canvas from '@/P5Canvas';
import * as strategies from './strategies';

const setup = (p) => {
  p.createCanvas(700, 700);
  p.fill(255);
  p.stroke(255);
};

const draw = (n, strategyName) => (p) => {
  const alpha = strategyName === 'heartBeat' ? 255 : 10;
  const drawingStrategy = strategies[strategyName];
  p.background(0, alpha);

  drawingStrategy(n, p);
};

export default class TrigonometricFunctions extends Component {
  constructor() {
    super();
    this.state = {
      n: 12,
      name: 'heartBeat',
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
      n,
    });
  }

  render() {
    return (
      <div>
        <SelectField value={this.state.name} onChange={this.handleChangeName}>
          <MenuItem value="heartBeat" primaryText="Heart Beat" />
          <MenuItem value="singleSpin" primaryText="Single Spin" />
          <MenuItem value="doubleSpin" primaryText="Double Spin" />
          <MenuItem value="fakeRoller" primaryText="Fake Roller" />
        </SelectField>
        <P5Canvas
          name={this.state.name}
          setup={setup}
          draw={draw(this.state.n, this.state.name)}
        />
        <Slider
          min={0}
          max={36}
          step={1}
          value={this.state.n}
          onChange={this.handleChangeN}
        />
      </div>
    );
  }
}
