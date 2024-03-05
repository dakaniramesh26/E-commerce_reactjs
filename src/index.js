
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { CartProvider } from './stores/context/CartContext.js'
import App from './App.js'




ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<React.StrictMode>
  <CartProvider>
<App/>
  </CartProvider>
</React.StrictMode>
</BrowserRouter>
)