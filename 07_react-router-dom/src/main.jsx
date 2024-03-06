import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  Home  from "./components/Home/Home.jsx";
import  ContactUs  from "./components/Contact/ContactUs.jsx";
import  About  from "./components/About/About.jsx";
import Github from './components/Github/Github1.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '',
        element: <Home />,
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'ContactUs',
        element: <ContactUs/>
      },
      {
        path:'github',
        element: <Github/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
