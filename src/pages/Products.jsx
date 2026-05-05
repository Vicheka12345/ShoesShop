import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

const toSlug = (value) => value.toLowerCase().replace(/\s+/g, '-')

export default function Products({ onAdd, categorySlug }) {
  const navigate = useNavigate()
  const categoryFromUrl = useMemo(
    () => {
      if (categorySlug === 'runing') return 'Running'
      return categories.find(c => toSlug(c) === categorySlug) || 'All'
    },
    [categorySlug]
  )
  const [filter, setFilter] = useState(categoryFromUrl)

  useEffect(() => {
    setFilter(categoryFromUrl)
  }, [categoryFromUrl])

  const filtered =
    filter === 'All' ? products.slice(0, 8) : products.filter(p => p.tags.includes(filter))

  function chooseCategory(category) {
    setFilter(category)
    navigate(category === 'All' ? '/products' : `/products/${toSlug(category)}`)
  }

  return (
    <div className="page px-[6%] py-12 lg:py-20">
      <div className="max-w-4xl mb-12 lg:mb-20">
        <span className="section-tag">Our Collection</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{filter === 'All' ? 'All Products' : `${filter} Products`}</h1>
        <p className="text-gray-soft text-lg font-medium">{filtered.length} styles available</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-12 lg:mb-16">
        <span className="text-[10px] uppercase tracking-widest font-bold text-brand-black/30 mr-2">Filter</span>
        {categories.map(c => (
          <button
            key={c}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === c ? 'bg-brand-black text-white shadow-lg' : 'bg-white text-brand-black/60 border border-brand-black/5 hover:border-gold hover:text-brand-black'}`}
            onClick={() => chooseCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="min-h-[40vh]">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/40 rounded-3xl border-2 border-dashed border-brand-black/5 text-gray-soft italic">No products found.</div>
        )}
      </div>
    </div>
  )
}
