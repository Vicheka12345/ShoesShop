import React from 'react'
import { services } from '../data/products'
import styles from './Service.module.css'

export default function Service() {
  return (
    <div className="page">
      <section className={styles.hero}>
        <span className="section-tag">✦ What We Offer</span>
        <h1 className={styles.heroTitle}>Services Tailored<br />for You</h1>
        <p className={styles.heroDesc}>
          We don't just sell shoes. We provide a complete experience — from discovery to doorstep and beyond.
        </p>
      </section>

      <section className={styles.grid}>
        {services.map((s, i) => (
          <div className={styles.card} key={s.title}>
            <div className={styles.cardHeader}>
              <div className={styles.num}>0{i + 1}</div>
              <div className={styles.icon}>
                <img src={s.img} alt={s.title} className={styles.serviceImg} />
              </div>
            </div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </section>

      <section className={styles.promise}>
        <div className={styles.promiseInner}>
          <span className="section-tag">✦ Our Promise</span>
          <h2 className={styles.promiseTitle}>TheViz Guarantee</h2>
          <p className={styles.promiseDesc}>
            Every purchase is backed by our quality guarantee. If you're not completely satisfied, we'll make it right — no questions asked.
          </p>
          <div className={styles.promisePills}>
            {['Quality Assured', 'Ethically Made', 'Planet Friendly', '24/7 Support'].map(p => (
              <span className={styles.pill} key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
