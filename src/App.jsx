import React, { useState, useRef } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Scroll from './components/Scroll'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'

function ProductRoute({ onAdd }) {
  const { slug } = useParams()

  if (/^\d+$/.test(slug)) {
    return <ProductDetail onAdd={onAdd} />
  }

  return <Products onAdd={onAdd} categorySlug={slug} />
}

export default function App() {
  const [cart, setCart] = useState([])
  const [toast, setToast] = useState('')
  const toastTimeout = useRef(null)

  function addToCart(product) {
    setCart(prev => [...prev, product])
    setToast(`${product.name} added to cart`)
    if (toastTimeout.current) clearTimeout(toastTimeout.current)
    toastTimeout.current = setTimeout(() => setToast(''), 3000)
  }

  return (
    <>
      <Scroll />
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products onAdd={addToCart} />} />
        <Route path="/products/:slug" element={<ProductRoute onAdd={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>
    </>
  )
}
