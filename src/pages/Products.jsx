import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'
import styles from './Products.module.css'

export default function Products({ onAdd }) {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? products.slice(0, 8) : products.filter(p => p.tags.includes(filter))

  return (
    <div className="page">
      <div className={styles.header}>
        <span className="section-tag">✦ Our Collection</span>
        <h1 className={styles.title}>All Products</h1>
        <p className={styles.subtitle}>{filtered.length} styles available</p>
      </div>

      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Filter:</span>
        {categories.map(c => (
          <button
            key={c}
            className={`${styles.filterBtn} ${filter === c ? styles.active : ''}`}
            onClick={() => setFilter(c)}
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
