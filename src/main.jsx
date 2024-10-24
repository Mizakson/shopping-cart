import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: "home element here",
//   },
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
