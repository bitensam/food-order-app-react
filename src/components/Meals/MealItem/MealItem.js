import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({
  productId,
  productName,
  productDescription,
  productPrice,
}) => {
  // format ceny
  const price = `$${productPrice.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: productId,
      name: productName,
      amount: amount,
      price: productPrice,
    });
  };

  return (
    <li className={styles.meal}>
      <article>
        <h3>{productName}</h3>
        <p className={styles.description}>{productDescription}</p>
        <p className={styles.price}>{price}</p>
      </article>
      <div>
        <MealItemForm id={productId} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
