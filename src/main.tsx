import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { App, MockContentComponent } from './App.tsx'


const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                element: <MockContentComponent randomWord="home" />
            },
            {
                path: "home",
                element: <MockContentComponent randomWord="home" />
            },
            {
                path: "catalog",
                element: <MockContentComponent randomWord="catalog" />
            },
            {
                path: "about",
                element: <MockContentComponent randomWord="about" />
            },
            {
                path: "contact",
                element: <MockContentComponent randomWord="contact" />
            }
        ]
    },

])

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
)
