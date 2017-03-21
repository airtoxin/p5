import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="p5"
          onLeftIconButtonTouchTap={() => this.props.dispatch(tree => tree.set(['isSidebarOpened'], true))}
        />
        <Drawer
          docked={false}
          open={this.props.isSidebarOpened}
          onRequestChange={(open) => this.props.dispatch(tree => tree.set(['isSidebarOpened'], open))}
        />
      </div>
    );
  }
}

export default branch({
  isSidebarOpened: ['isSidebarOpened'],
}, App);
