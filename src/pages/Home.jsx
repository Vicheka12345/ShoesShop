import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import top from "../image/top.shoes.jpg";
import shoes1 from "../image/shoes1.jpg";
import shoes2 from "../image/shoes2.jpg";
import shoes3 from "../image/shoes3.jpg";
import shoes4 from "../image/shoes4.jpg";

export default function Home({ onAdd }) {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="flex flex-col lg:flex-row items-center gap-12 px-[6%] py-12 lg:py-20 min-h-[80vh]">
        <div className="flex-1 text-center lg:text-left">
          <span className="text-gold font-extrabold uppercase tracking-widest text-xs mb-4 block animate-fade-in">Premium Footwear Studio</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Step Into <em className="text-gold not-italic">Pure</em> Luxury
          </h1>
          <p className="text-gray-soft text-lg max-w-xl mb-10 mx-auto lg:mx-0">
            Discover footwear that transcends trends. Each pair is a statement -
            crafted with precision, worn with purpose.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button className="btn-primary" onClick={() => navigate("/products")}>
              Shop Now
            </button>
            <button className="btn-outline" onClick={() => navigate("/about")}>
              Our Story
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-[10px] font-bold uppercase tracking-widest text-brand-black/40">
            <span>120+ Styles</span>
            <span className="w-1 h-1 bg-gold rounded-full" />
            <span>Premium Leather</span>
            <span className="w-1 h-1 bg-gold rounded-full" />
            <span>Fast Delivery</span>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-2xl">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
            <img src={top} alt="New Collection Shoes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-6 right-6 bg-gold text-brand-black w-16 h-16 rounded-full flex items-center justify-center text-center font-bold text-xs uppercase leading-none shadow-lg">
              New<br />2026
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/10 -z-10 rounded-full blur-3xl" />
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-gold/5 -z-10 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="px-[6%] py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-tag">Editor's Pick</span>
            <h2 className="section-title">Featured Collection</h2>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-gold transition-colors pb-1 border-b-2 border-gold" onClick={() => navigate("/products")}>
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((p, index) => {
            const productImages = [shoes1, shoes2, shoes3, shoes4];
            return (
              <ProductCard
                key={p.id}
                product={{ ...p, image: productImages[index] }}
                onAdd={onAdd}
              />
            );
          })}
        </div>
      </section>

      <section className="px-[6%] py-12 lg:py-24">
        <div className="bg-brand-black rounded-3xl p-8 lg:p-20 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Limited Time</span>
            <h2 className="text-3xl md:text-5xl text-white font-bold mb-6">Up to 40% Off Sale Items</h2>
            <p className="text-white/60 text-lg max-w-lg mx-auto mb-10">
              New markdowns added every week. Don't miss your size.
            </p>
            <button className="bg-white text-brand-black px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-gold transition-all" onClick={() => navigate("/products")}>
              Shop the Sale
            </button>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
    </div>
  );
}
