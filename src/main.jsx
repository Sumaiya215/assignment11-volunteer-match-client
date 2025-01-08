import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
