import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import styles from "./Home.module.css";
import top from "../image/top.shoes.jpg";
import shoes1 from "../image/shoes1.jpg";
import shoes2 from "../image/shoes2.jpg";
import shoes3 from "../image/shoes3.jpg";
import shoes4 from "../image/shoes4.jpg";

export default function Home({ onAdd }) {
  const navigate = useNavigate();

  return (
    <div className="page">
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Step Into <em>Pure</em> Luxury
          </h1>
          <p className={styles.heroDesc}>
            Discover footwear that transcends trends. Each pair is a statement —
            crafted with precision, worn with purpose.
          </p>
          <div className={styles.heroBtns}>
            <button
              className="btn-primary"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
            <button className="btn-outline" onClick={() => navigate("/about")}>
              Our Story
            </button>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.shoeDisplay}>
            <img
              src={top}
              alt="New Collection Shoes"
              className={styles.shoeImage}
            />
            <div className={styles.heroBadge}>
              New
              <br />
              2026
            </div>
          </div>
        </div>
      </section>


      {/* FEATURED */}
      <section className="section">
        <div className={styles.sectionHeader}>
          <div>
            <span className="section-tag">✦ Editor's Pick</span>
            <h2 className="section-title">Featured Collection</h2>
          </div>
          <span className={styles.seeAll} onClick={() => navigate("/products")}>
            View All →
          </span>
        </div>
        <div className={styles.grid}>
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

      {/* BANNER */}
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <span className="section-tag">✦ Limited Time</span>
          <h2 className={styles.bannerTitle}>Up to 40% Off Sale Items</h2>
          <p className={styles.bannerDesc}>
            New markdowns added every week. Don't miss your size.
          </p>
          <button
            className={styles.bannerBtn}
            onClick={() => navigate("/products")}
          >
            Shop the Sale
          </button>
        </div>
      </section>
    </div>
  );
}
