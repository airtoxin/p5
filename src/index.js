import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import App from './App';

injectTapEventPlugin();

const Rooted = root(tree, App);

render(
  (<MuiThemeProvider>
    <Rooted />
  </MuiThemeProvider>),
  document.getElementById('app')
);
