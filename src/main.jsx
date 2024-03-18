import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { MenuDocument } from './components/menudocument.jsx'
import { WriteReview } from './components/writereview.jsx'
import { ReadReview } from './components/readreview.jsx'
import { Home } from './components/home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"writereview",
    element:<WriteReview/>
  },
  {
    path:"readreview",
    element:<ReadReview/>
  },
  {
    path:"menudocument",
    element:<MenuDocument/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
