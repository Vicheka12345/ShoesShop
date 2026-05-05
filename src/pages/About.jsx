import React from 'react'
import { useNavigate } from 'react-router-dom'
import shoes from '../image/shoes-about.jpg'
import ourFounder from '../image/ourFounder.jpg'
import ourFounder1 from '../image/ourFounder1.jpg'
import ourFounder2 from '../image/ourFounder2.jpg'

export default function About() {
  const navigate = useNavigate()
  const values = [
    { icon: '✨', title: 'Unmatched Quality', desc: 'Every material is sourced from the world\'s finest tanneries and mills, chosen for durability and feel.' },
    { icon: '🌿', title: 'Sustainable Craft', desc: 'We are committed to ethical production — minimal waste, fair wages, and eco-conscious materials.' },
    { icon: '🏛️', title: 'Timeless Design', desc: 'Inspired by art, architecture, and the street — designs that outlast seasons and trends.' },
    { icon: '🤝', title: 'Customer First', desc: 'Free returns, lifetime repairs, and a dedicated team ready to help. Your satisfaction, always.' },
  ]

  return (
    <div className="page">
      <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-[6%] py-12 lg:py-24">
        <div className="flex-1 relative group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img src={shoes} alt="About Shoes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-2xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
        </div>
        
        <div className="flex-1">
          <span className="section-tag">✦ Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">Born from a Love of Exceptional Footwear</h1>
          <div className="space-y-6 text-gray-soft text-lg leading-relaxed">
            <p>
              Founded in 2014, Theviz began as a small workshop in Sydney with one mission: to create shoes that feel as extraordinary as they look. Over a decade later, we remain fiercely independent, family-owned, and obsessively quality-driven.
            </p>
            <p>
              Every pair we create is a dialogue between heritage craftsmanship and forward-thinking design. We source the finest leathers from Italy, breathable textiles from Japan, and sustainable soles from Portugal.
            </p>
          </div>
          <button className="btn-primary mt-10" onClick={() => navigate('/contact')}>
            Get In Touch
          </button>
        </div>
      </section>

      <section className="bg-brand-black py-20 px-[6%] text-white">
        <div className="max-w-3xl mb-16">
          <span className="section-tag">✦ What Drives Us</span>
          <h2 className="text-3xl md:text-5xl font-bold">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map(v => (
            <div className="group" key={v.title}>
              <div className="text-4xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-12 inline-block">{v.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gold">{v.title}</h3>
              <p className="text-white/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[6%] py-20 lg:py-32">
        <div className="text-center mb-20">
          <span className="section-tag">✦ The People</span>
          <h2 className="section-title">Meet Our Founders</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { img: ourFounder, name: 'Eleanor Haig', role: 'Co-Founder & Creative Director' },
            { img: ourFounder1, name: 'James Sole', role: 'Co-Founder & Head of Craft' },
            { img: ourFounder2, name: 'Mina Yao', role: 'Head of Materials & Sustainability' },
          ].map(p => (
            <div className="group text-center" key={p.name}>
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-xl">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
              <p className="text-gray-soft text-sm font-medium uppercase tracking-widest">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
