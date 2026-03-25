import React, { useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'

export default function App() {
  const [cart, setCart] = useState([])
  const [toast, setToast] = useState('')
  const toastTimeout = useRef(null)

  function addToCart(product) {
    setCart(prev => [...prev, product])
    setToast(`✓ ${product.name} added to cart!`)
    if (toastTimeout.current) clearTimeout(toastTimeout.current)
    toastTimeout.current = setTimeout(() => setToast(''), 3000)
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products onAdd={addToCart} />} />
        <Route path="/products/:id" element={<ProductDetail onAdd={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>
    </>
   )
}
