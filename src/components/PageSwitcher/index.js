import React from 'react';
import { Route } from 'react-router';
import Root from '@/pages/Root';
import Branches from '@/pages/Branches';

export default () => (
  <div>
    <Route path="/" exact component={Root} />
    <Route path="/branches" component={Branches} />
  </div>
);
