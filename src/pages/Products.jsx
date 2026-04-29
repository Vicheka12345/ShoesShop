import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'
import styles from './Products.module.css'

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
    <div className="page">
      <div className={styles.header}>
        <span className="section-tag">Our Collection</span>
        <h1 className={styles.title}>{filter === 'All' ? 'All Products' : `${filter} Products`}</h1>
        <p className={styles.subtitle}>{filtered.length} styles available</p>
      </div>

      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Filter</span>
        {categories.map(c => (
          <button
            key={c}
            className={`${styles.filterBtn} ${filter === c ? styles.active : ''}`}
            onClick={() => chooseCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>No products found.</div>
        )}
      </div>
    </div>
  )
}
