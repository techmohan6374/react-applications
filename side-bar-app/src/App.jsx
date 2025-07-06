import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './Layout/RootLayout'
import Dashboard from './pages/Dashboard'
import Datasets from './pages/Datasets'
import Reportcenter from './pages/Reportcenter'
import Role from './pages/Role'
import Routes from './pages/Routes'
import Users from './pages/Users'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="datasets" element={<Datasets />}></Route>
        <Route path="reportcenter" element={<Reportcenter />}></Route>
        <Route path="role" element={<Role />}></Route>
        <Route path="routes" element={<Routes />}></Route>
        <Route path="users" element={<Users />}></Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
