import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import { withRouter, Route } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as actions from '~~/actions';
import Controls from '@/Controls';
import Root from '@/pages/Root';
import Branches from '@/pages/Branches';
import TrigonometricFunctions from '@/pages/TrigonometricFunctions';
import styles from './styles';

const App = ({ dispatch, history, isSidebarOpening }) => (
  <div>
    <AppBar
      title="p5.js playground"
      onLeftIconButtonTouchTap={() => dispatch(actions.openCloseSidebar, true)}
    />

    <Drawer
      docked={false}
      open={isSidebarOpening}
      onRequestChange={isOpening => dispatch(actions.openCloseSidebar, isOpening)}
    >
      <MenuItem onTouchTap={() => history.push('/')}>/</MenuItem>
      <MenuItem onTouchTap={() => history.push('/branches')}>Branches</MenuItem>
      <MenuItem onTouchTap={() => history.push('/trigonometricfunctions')}>TrigonometricFunctions</MenuItem>
    </Drawer>

    <div className={styles.container}>
      <div className={styles.row}><Controls /></div>
      <div className={styles.row}>
        <Route path="/" exact component={Root} />
        <Route path="/branches" component={Branches} />
        <Route path="/trigonometricfunctions" component={TrigonometricFunctions} />
      </div>
    </div>
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
  isSidebarOpening: PropTypes.bool.isRequired,
};

export default branch({
  isSidebarOpening: ['isSidebarOpening'],
}, withRouter(App));
