import React from 'react';
import { Route } from 'react-router';
import Default from './pages/Default';
import Hoge from './pages/Hoge';

export default () => (
  <div>
    <Route path="/" exact component={Default}/>
    <Route path="/hoge" component={Hoge}/>
  </div>
);
