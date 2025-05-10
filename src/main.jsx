import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './Pages/Error-page.jsx';
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx';
import ContactMe from './Pages/Contact-me.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
    errorElement: < ErrorPage/>,
    children: [
      { index: true, element: < About />},
      { path: "about", element: < About/> },
      { path: "projects", element: < Projects/> },
      { path: "contact-me", element: < ContactMe/> }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
