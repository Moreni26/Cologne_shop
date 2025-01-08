import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from './contexts/SidebarContext.jsx';
import CartProvider from './contexts/CartContext.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
  <SidebarProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </SidebarProvider>
    </ProductProvider>
  </StrictMode>,
)
