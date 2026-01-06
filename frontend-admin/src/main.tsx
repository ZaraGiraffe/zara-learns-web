import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Catalog from './Catalog.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'catalog',
        Component: Catalog
      }
    ]
  }
])

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
)
