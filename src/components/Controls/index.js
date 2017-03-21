import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '~~/actions';
import styles from './styles';

const Controls = ({ dispatch }) => (
  <div className={styles.container}>
    <RaisedButton
      onTouchTap={() => dispatch(actions.redraw)}
    >Re-Draw</RaisedButton>
    <RaisedButton
      onTouchTap={() => dispatch(actions.triggerSaveAsImage)}
    >Save as image</RaisedButton>
  </div>
);

Controls.propTypes = {
  dispatch: PropTypes.any.isRequired,
};

export default branch({}, Controls);
