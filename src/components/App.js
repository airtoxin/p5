import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import { withRouter, Route } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as actions from '~~/actions';
import routes from '~~/routes';
import Controls from '@/Controls';
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
      {routes.map(({ path, name }) => (
        <MenuItem key={path} onTouchTap={() => history.push(path)}>{name}</MenuItem>
      ))}
    </Drawer>

    <div className={styles.container}>
      <div className={styles.row}><Controls /></div>
      <div className={styles.row}>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} exact component={component} />
        ))}
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
