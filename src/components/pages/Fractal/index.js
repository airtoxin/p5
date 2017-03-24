import React from 'react';
import PageTemplate from '@/pages/PageTemplate';
import * as strategies from './strategies';

const settings = Object.entries(strategies).reduce((obj, [name, { setup, draw }]) => {
  return {
    ...obj,
    [name]: {
      setup,
      draw: draw,
      maxN: 10,
    },
  };
}, {});

export default () => (
  <PageTemplate
    settings={settings}
  />
);
