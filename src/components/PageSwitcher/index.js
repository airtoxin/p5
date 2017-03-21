import React from 'react';
import { Route } from 'react-router';
import Root from '@/pages/Root';
import Hoge from '@/pages/Hoge';
import styles from './styles';

export default () => (
  <div className={styles.container}>
    <Route path="/" exact component={Root}/>
    <Route path="/hoge" component={Hoge}/>
  </div>
);
