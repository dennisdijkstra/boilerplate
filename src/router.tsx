import App from './App.tsx'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <h1>About</h1>,
  },
]

const router = createBrowserRouter(routes)

export default router