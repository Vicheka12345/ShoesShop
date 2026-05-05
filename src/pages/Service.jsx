import React from 'react'
import { services } from '../data/products'

export default function Service() {
  return (
    <div className="page">
      <section className="px-[6%] py-12 lg:py-24 text-center max-w-4xl mx-auto">
        <span className="section-tag">✦ What We Offer</span>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Services Tailored<br />for You</h1>
        <p className="text-gray-soft text-xl leading-relaxed">
          We don't just sell shoes. We provide a complete experience — from discovery to doorstep and beyond.
        </p>
      </section>

      <section className="px-[6%] py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {services.map((s, i) => (
          <div className="group bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-brand-black/5 hover:border-gold/30 transition-all hover:shadow-2xl" key={s.title}>
            <div className="flex items-center justify-between mb-8">
              <div className="text-4xl font-bold text-brand-black/10">0{i + 1}</div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
            <p className="text-gray-soft leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="px-[6%] py-20 lg:py-32 bg-cream/30">
        <div className="max-w-5xl mx-auto bg-brand-black rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 text-center">
            <span className="section-tag text-gold">✦ Our Promise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">TheViz Guarantee</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
              Every purchase is backed by our quality guarantee. If you're not completely satisfied, we'll make it right — no questions asked.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Quality Assured', 'Ethically Made', 'Planet Friendly', '24/7 Support'].map(p => (
                <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest hover:border-gold transition-colors cursor-default" key={p}>{p}</span>
              ))}
            </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
      </section>
    </div>
  )
}
