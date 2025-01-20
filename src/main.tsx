import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import {AnimatePresence} from "framer-motion";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AnimatePresence mode={`wait`}>
        <RouterProvider router={router} />
      </AnimatePresence>
  </React.StrictMode>,
)
