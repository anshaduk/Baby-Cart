import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartState from './Components/Context/Cart/CartState.jsx'
import { NewCartContextProvider } from './Components/Context/NewCart/index.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewCartContextProvider>
    <CartState>
    <App />
    </CartState>
    </NewCartContextProvider>
  </React.StrictMode>,
)
