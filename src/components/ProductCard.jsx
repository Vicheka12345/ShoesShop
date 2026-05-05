import React from "react";
import { useNavigate } from "react-router-dom";

export function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 text-gold text-xs" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function ProductCard({ product, onAdd }) {
  const navigate = useNavigate();

  return (
    <div className="group bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-black/5 hover:border-gold/30 transition-all duration-300 hover:shadow-2xl cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
      <div className="relative aspect-square overflow-hidden bg-cream/50">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
            {product.badge}
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors" />
      </div>
      
      <div className="p-6">
        <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{product.category}</div>
        <div className="text-lg font-bold text-brand-black mb-2 group-hover:text-gold transition-colors">{product.name}</div>
        <Stars />
        
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-brand-black">${product.price}</span>
            {product.oldPrice && <span className="text-sm text-brand-black/30 line-through">${product.oldPrice}</span>}
          </div>
          <button
            className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center transition-all hover:bg-gold hover:text-brand-black active:scale-95 shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
