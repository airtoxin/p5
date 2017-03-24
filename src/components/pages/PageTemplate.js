import React, { Component, PropTypes } from 'react';
import * as ExtraPropTypes from 'airbnb-prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import P5Canvas from '@/P5Canvas';

export default class PageTemplate extends Component {
  constructor(props) {
    super();

    const name = Object.keys(props.settings)[0];
    this.state = {
      name: Object.keys(props.settings)[0],
      n: Math.floor((props.settings[name].minN || 0 + props.settings[name].maxN || 10) / 2),
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
    const { setup, draw, minN = 0, maxN = 10 } = this.props.settings[this.state.name];
    return (
      <div>
        <SelectField value={this.state.name} onChange={this.handleChangeName}>
          {Object.keys(this.props.settings).map((name) => (
            <MenuItem key={name} value={name} primaryText={name} />
          ))}
        </SelectField>
        <P5Canvas
          name={this.state.name}
          setup={setup}
          draw={draw(this.state.n)}
        />
        <Slider
          min={minN}
          max={maxN}
          step={1}
          value={this.state.n}
          onChange={this.handleChangeN}
        />
      </div>
    );
  }
}

PageTemplate.propTypes = {
  settings: PropTypes.objectOf(PropTypes.shape({
    setup: PropTypes.func.isRequired, // arg: (p)
    draw: PropTypes.func.isRequired, // arg: (n, p)
    minN: ExtraPropTypes.integer,
    maxN: ExtraPropTypes.integer,
  })).isRequired,
};
