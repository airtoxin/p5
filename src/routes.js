import Root from '@/pages/Root';
import Branches from '@/pages/Branches';
import TrigonometricFunctions from '@/pages/TrigonometricFunctions';
import Fractal from '@/pages/Fractal';

export default [
  { path: '/', name: '/', component: Root },
  { path: '/branches', name: 'Branches', component: Branches },
  { path: '/trifunctions', name: 'TrigonometricFunctions', component: TrigonometricFunctions },
  { path: '/fractal', name: 'Fractal', component: Fractal },
];
