import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { Stars } from "../components/ProductCard";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ onAdd }) {
  const { id, slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id || slug));

  const [selectedSize, setSelectedSize] = useState(42);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div
        className="page"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <h2>Product not found</h2>
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
    <div className="page">
      <div className={styles.layout}>
        <div className={styles.imgSide}>
          {product.badge && <div className={styles.badge}>{product.badge}</div>}
          <img src={product.image} alt={product.name} className={styles.mainImg} />
        </div>

        <div className={styles.infoSide}>
          <div className={styles.category}>{product.category}</div>
          <h1 className={styles.name}>{product.name}</h1>

          <div className={styles.rating}>
            <Stars />
            <span className={styles.reviewCount}>(128 reviews)</span>
          </div>

          <div className={styles.price}>${product.price}</div>
          {product.oldPrice && <div className={styles.oldPrice}>Was ${product.oldPrice}</div>}

          <p className={styles.desc}>{product.desc}</p>

          <div className={styles.label}>Size (EU)</div>
          <div className={styles.sizeGrid}>
            {sizes.map((s) => (
              <button
                key={s}
                className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeActive : ""}`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className={styles.label}>Color</div>
          <div className={styles.colorGrid}>
            {product.colors.map((c, i) => (
              <div
                key={i}
                className={`${styles.colorDot} ${selectedColor === i ? styles.colorActive : ""}`}
                style={{ background: c }}
                onClick={() => setSelectedColor(i)}
              />
            ))}
          </div>

          <div className={styles.actions}>
            <button className={styles.cartBtn} onClick={() => onAdd(product)}>
              Add to Cart
            </button>
          </div>

          <div className={styles.features}>
            {features.map((text) => (
              <div className={styles.featureRow} key={text}>
                <span>-</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.related}>
        <span className="section-tag">You May Also Like</span>
        <div className={styles.relatedGrid}>
          {products
            .filter((p) => p.id !== product.id && p.category === product.category)
            .slice(0, 3)
            .concat(products.filter((p) => p.id !== product.id).slice(0, 3))
            .slice(0, 3)
            .map((p) => (
              <div
                key={p.id}
                className={styles.relatedCard}
                onClick={() => navigate(`/products/${p.id}`)}
              >
                <div className={styles.relatedImg}>
                  <img src={p.image} alt={p.name} />
                </div>
                <div className={styles.relatedInfo}>
                  <div className={styles.relatedName}>{p.name}</div>
                  <div className={styles.relatedPrice}>${p.price}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
