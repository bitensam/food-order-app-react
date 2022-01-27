import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ showCart }) => {
  const cartCtx = useContext(CartContext);

  const numberofCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={showCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
