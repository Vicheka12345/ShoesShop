import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './About.module.css'
import shoes from '../image/shoes-about.jpg'
import ourFounder from '../image/ourFounder.jpg'
import ourFounder1 from '../image/ourFounder1.jpg'
import ourFounder2 from '../image/ourFounder2.jpg'
export default function About() {
  const navigate = useNavigate()
  const values = [
    { icon: '', title: 'Unmatched Quality', desc: 'Every material is sourced from the world\'s finest tanneries and mills, chosen for durability and feel.' },
    { icon: '', title: 'Sustainable Craft', desc: 'We are committed to ethical production — minimal waste, fair wages, and eco-conscious materials.' },
    { icon: '', title: 'Timeless Design', desc: 'Inspired by art, architecture, and the street — designs that outlast seasons and trends.' },
    { icon: '', title: 'Customer First', desc: 'Free returns, lifetime repairs, and a dedicated team ready to help. Your satisfaction, always.' },
  ]

  return (
    <div className="page">
      <section className={styles.heroSection}>
        <div className={styles.imgWrap}>
          <img src={shoes} alt="About Shoes" className={styles.aboutImg} />
          <div className={styles.imgFrame} />
        </div>
        <div className={styles.content}>
          <span className="section-tag">✦ Our Story</span>
          <h1 className={styles.title}>Born from a Love of Exceptional Footwear</h1>
          <p className={styles.desc}>
            Founded in 2014, Theviz began as a small workshop in Sydney with one mission: to create shoes that feel as extraordinary as they look. Over a decade later, we remain fiercely independent, family-owned, and obsessively quality-driven.
          </p>
          <p className={styles.desc}>
            Every pair we create is a dialogue between heritage craftsmanship and forward-thinking design. We source the finest leathers from Italy, breathable textiles from Japan, and sustainable soles from Portugal.
          </p>
          <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => navigate('/contact')}>
            Get In Touch
          </button>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <span className="section-tag">✦ What Drives Us</span>
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map(v => (
            <div className={styles.valueCard} key={v.title}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.teamSection}>
        <span className="section-tag">✦ The People</span>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Meet Our Founders</h2>
        <div className={styles.teamGrid}>
          {[
            { img: ourFounder, name: 'Eleanor Haig', role: 'Co-Founder & Creative Director' },
            { img: ourFounder1, name: 'James Sole', role: 'Co-Founder & Head of Craft' },
            { img: ourFounder2, name: 'Mina Yao', role: 'Head of Materials & Sustainability' },
          ].map(p => (
            <div className={styles.personCard} key={p.name}>
              <div className={styles.personImgWrap}>
                <img src={p.img} alt={p.name} className={styles.personImg} />
              </div>
              <h3 className={styles.personName}>{p.name}</h3>
              <p className={styles.personRole}>{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
