import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About'
import Contact from './components/Contact.jsx'
import PostBlog from './components/PostBlog.jsx'

import { createBrowserRouter,RouterProvider } from "react-router";
import DetailPage from './components/DetailPage.jsx'
const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/postBlog',
        element: <PostBlog/>,
      },
      {
        path: '/slug/:slug',
        element: <DetailPage/>,
      },
    ],
  },
])


createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
