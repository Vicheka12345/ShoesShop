import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

export function Stars({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function ProductCard({ product, onAdd }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/products/${product.id}`)}>
      <div className={styles.imgWrap}>
        {product.badge && <div className={styles.badge}>{product.badge}</div>}
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.productImage} />
        ) : (
          <span className={styles.image}>{product.image}</span>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.category}>{product.category}</div>
        <div className={styles.name}>{product.name}</div>
        <Stars />
        <div className={styles.footer}>
          <div>
            <span className={styles.price}>${product.price}</span>
            {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
          </div>
          <button
            className={styles.addBtn}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
