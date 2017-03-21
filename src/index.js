import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { root } from 'baobab-react/higher-order';
import tree from '~~/tree';
import App from '@/App';

injectTapEventPlugin();

const Rooted = root(tree, App);
const Routered = () => (<BrowserRouter><Rooted /></BrowserRouter>);

render(
  (<MuiThemeProvider>
    <Routered />
  </MuiThemeProvider>),
  document.getElementById('app')
);
