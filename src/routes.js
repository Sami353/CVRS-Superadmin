import React from 'react'

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'))
const childRegister = React.lazy(() => import('./components/childregister/childRegister'))
const listHospital = React.lazy(() => import('./components/listHospital/listHospital'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/registerChild', name: '', element: childRegister },
  { path: '/listHospital', name: '', element: listHospital},
]

export default routes
