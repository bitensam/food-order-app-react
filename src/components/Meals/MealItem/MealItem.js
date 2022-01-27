import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ productName, productDescription, productPrice }) => {
  // format ceny
  const price = `$${productPrice.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <article>
        <h3>{productName}</h3>
        <p className={styles.description}>{productDescription}</p>
        <p className={styles.price}>{price}</p>
      </article>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
