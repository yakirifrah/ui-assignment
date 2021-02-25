import { HomeContainer, WorkflowContainer, UnderConstructor } from '../containers';
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomeContainer,
    exact: true,
  },
  {
    path: '/Workflow',
    name: 'Workflow',
    component: WorkflowContainer,
    exact: true,
  },
  {
    patch: '/Statistics',
    name: 'Statistics',
    component: UnderConstructor,
    exact: true,
  },
  {
    patch: '/Calendar',
    name: 'Calendar',
    component: UnderConstructor,
    exact: true,
  },
  {
    patch: '/Users',
    name: 'Users',
    component: UnderConstructor,
    exact: true,
  },
  {
    patch: '/Settings',
    name: 'Settings',
    component: UnderConstructor,
    exact: true,
  },
];
export default routes;
