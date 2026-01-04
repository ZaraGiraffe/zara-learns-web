import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  }
])

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
)
