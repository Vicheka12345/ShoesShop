import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { Stars } from "../components/ProductCard";

export default function ProductDetail({ onAdd }) {
  const { id, slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id || slug));

  const [selectedSize, setSelectedSize] = useState(42);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="page flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center">
        <h2 className="text-3xl font-bold">Product not found</h2>
        <button className="btn-primary" onClick={() => navigate("/products")}>
          View Products
        </button>
      </div>
    );
  }

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
  const features = [
    "Free delivery on this item",
    "90-day free returns",
    "Authenticity guaranteed",
    "Free sole repair for 1 year",
  ];

  return (
    <div className="page px-[6%] py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left Side: Images */}
        <div className="flex-1 w-full sticky top-32">
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-cream/40 shadow-2xl group">
            {product.badge && (
              <div className="absolute top-8 left-8 z-10 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                {product.badge}
              </div>
            )}
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="flex-1 w-full max-w-xl">
          <div className="text-xs font-extrabold text-gold uppercase tracking-[0.3em] mb-4">{product.category}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-6 leading-tight">{product.name}</h1>

          <div className="flex items-center gap-4 mb-8">
            <Stars />
            <span className="text-sm font-bold text-brand-black/40 uppercase tracking-widest">(128 reviews)</span>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="text-4xl font-bold text-brand-black">${product.price}</div>
            {product.oldPrice && <div className="text-xl text-brand-black/20 line-through">Was ${product.oldPrice}</div>}
          </div>

          <p className="text-gray-soft text-lg leading-relaxed mb-12 border-l-4 border-gold/20 pl-6 italic">{product.desc}</p>

          <div className="mb-10">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40 mb-4">Select Size (EU)</div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`h-12 flex items-center justify-center rounded-xl text-sm font-bold transition-all border ${selectedSize === s ? 'bg-brand-black text-white border-brand-black shadow-lg scale-110' : 'bg-white text-brand-black/60 border-brand-black/5 hover:border-gold hover:text-brand-black'}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40 mb-4">Available Colors</div>
            <div className="flex gap-4">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 transition-all p-1 ${selectedColor === i ? 'border-gold scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
                  onClick={() => setSelectedColor(i)}
                >
                  <div className="w-full h-full rounded-full shadow-inner" style={{ background: c }} />
                </button>
              ))}
            </div>
          </div>

          <button className="w-full btn-primary py-6 text-lg mb-12 shadow-gold/10 hover:shadow-gold/20" onClick={() => onAdd(product)}>
            Add to Shopping Cart
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((text) => (
              <div className="flex items-center gap-3 p-4 bg-white/40 rounded-2xl border border-brand-black/5" key={text}>
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-black/60">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24 lg:mt-40">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-tag">Explore More</span>
            <h2 className="text-3xl md:text-5xl font-bold">You May Also Like</h2>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-gold transition-colors pb-1 border-b-2 border-gold" onClick={() => navigate("/products")}>
            See All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products
            .filter((p) => p.id !== product.id && p.category === product.category)
            .slice(0, 3)
            .concat(products.filter((p) => p.id !== product.id).slice(0, 3))
            .slice(0, 3)
            .map((p) => (
              <div
                key={p.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/products/${p.id}`)}
              >
                <div className="relative aspect-[5/4] rounded-3xl overflow-hidden mb-6 bg-cream/30 shadow-xl">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black group-hover:text-gold transition-colors mb-1">{p.name}</h3>
                    <div className="text-xs font-bold text-brand-black/30 uppercase tracking-widest">{p.category}</div>
                  </div>
                  <div className="text-xl font-bold text-gold">${p.price}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
