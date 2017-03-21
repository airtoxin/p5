import React from 'react';
import { Route } from 'react-router';
import Root from '@/pages/Root';
import SpidersWebDrips from '@/pages/SpidersWebDrips';
import StationMap from '@/pages/StationMap';

export default () => (
  <div>
    <Route path="/" exact component={Root} />
    <Route path="/spiderswebdrips" component={SpidersWebDrips} />
    <Route path="/stationmap" component={StationMap} />
  </div>
);
