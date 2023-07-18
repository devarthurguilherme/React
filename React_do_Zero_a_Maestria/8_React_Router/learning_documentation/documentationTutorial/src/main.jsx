import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// 1 - Creating a BrowserRouter
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
import Root from "./routes/Root.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
