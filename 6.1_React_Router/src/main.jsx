import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Components/About/About.jsx'
import Contact from '../Components/Contact/Contact.jsx'
import Github from '../Components/Github/Github.jsx'
import { githubInfoLoader } from '../Components/Github/githubinfo.js'
import Layout from './Layout.jsx'

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//           {
//             path: "",
//             element: <Home />
//           },
//           {
//             path: "about",
//             element: <About />
//           },
//           {
//             path: "contact",
//             element: <Contact />
//           },
//           {
//             path: "github",
//             element: <Github />
//           }
//         ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
