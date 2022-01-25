import React from 'react';
import styles from './MealItem.module.css';

const MealItem = ({ productName, productDescription, productPrice }) => {
  // format ceny
  const price = `$${productPrice.toFixed(2)}`;

  return (
    <article>
      <h3>{productName}</h3>
      <p className={styles.description}>{productDescription}</p>
      <p className={styles.price}>{price}</p>
    </article>
  );
};

export default MealItem;
