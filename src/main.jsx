import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a3542',
            color: '#F8F9FA',
            border: '1px solid rgba(212,175,55,0.3)',
          },
          success: {
            iconTheme: {
              primary: '#D4AF37',
              secondary: '#0F2027',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
)