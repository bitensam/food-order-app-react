import React from 'react';
import styles from './Header.module.css';
import heroImage from '../../assets/images/hero.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Jacobo Pizza Joint</h1>
        <HeaderCartButton showCart={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={heroImage} alt='Jacobo Pizza Joint' />
      </div>
    </>
  );
};

export default Header;
