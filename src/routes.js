import React from 'react';

const Dashboard = React.lazy(() =>
    import ('./views/Dashboard'));
const Test = React.lazy(() =>
    import ('./testcomponent'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/subadmin', name: 'Subadmin', component: Test },
    { path: '/subadmin_add', name: 'Patient MGMT', component: Test },
    { path: '/doctor_mgmt', name: 'Doctor Management', component: Test },
    { path: '/medicine_mgmt', name: 'Medicine MGMT', component: Test },
    { path: '/pharmacy_mgmt', name: 'Pharmacy MGMT', component: Test },
    { path: '/order_mgmt', name: 'Ordrer Management', component: Test },
    { path: '/specialization_mgmt', name: 'Specializations MGMT', component: Test },

];

export default routes;