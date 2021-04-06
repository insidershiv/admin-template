import React from 'react';

const Dashboard = React.lazy(() =>
    import ('./views/Dashboard'));
const Test = React.lazy(() =>
    import ('./testcomponent'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/test', name: 'Test', component: Test },

];

export default routes;