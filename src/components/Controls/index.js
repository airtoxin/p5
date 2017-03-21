import React from 'react';
import { branch } from 'baobab-react/higher-order';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '~~/actions';
import styles from './styles';

const Controls = ({ dispatch }) => {
  return (
    <div className={styles.container}>
      <RaisedButton
        onTouchTap={() => dispatch(actions.redraw)}
      >Re-Draw</RaisedButton>
      <RaisedButton
        onTouchTap={() => dispatch(actions.triggerSaveAsImage)}
      >Save as image</RaisedButton>
    </div>
  );
};

export default branch({}, Controls);
