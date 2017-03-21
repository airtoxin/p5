import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as actions from '~~/actions';
import Controls from '@/Controls';
import PageSwitcher from '@/PageSwitcher';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="p5"
          onLeftIconButtonTouchTap={() => this.props.dispatch(actions.openCloseSidebar, true)}
        />

        <Drawer
          docked={false}
          open={this.props.isSidebarOpening}
          onRequestChange={(isOpening) => this.props.dispatch(actions.openCloseSidebar, isOpening)}
        >
          <MenuItem onTouchTap={() => this.props.history.push('/')}>/</MenuItem>
          <MenuItem onTouchTap={() => this.props.history.push('/spiderswebdrips')}>Spider's web drips</MenuItem>
          <MenuItem onTouchTap={() => this.props.history.push('/stationmap')}>Station map</MenuItem>
        </Drawer>

        <div className={styles.container}>
          <div className={styles.row}><Controls /></div>
          <div className={styles.row}><PageSwitcher /></div>
        </div>
      </div>
    );
  }
}

export default branch({
  isSidebarOpening: ['isSidebarOpening'],
}, withRouter(App));
