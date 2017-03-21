import React from 'react';
import { Route } from 'react-router';
import Root from '@/pages/Root';
import DripTheSpidersWeb from '@/pages/DripTheSpidersWeb';
import styles from './styles';

export default () => (
  <div className={styles.container}>
    <Route path="/" exact component={Root}/>
    <Route path="/dripthespidersweb" component={DripTheSpidersWeb}/>
  </div>
);
