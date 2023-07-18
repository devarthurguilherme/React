import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1 - setting router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Page1 from "./routes/Page1.jsx";
import Page2 from "./routes/Page2.jsx";
import Page3 from "./routes/Page3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Page1 />
      },
      {
        path: "page2",
        element: <Page2 />
      },
      {
        path: "/page3",
        element: <Page3 />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
