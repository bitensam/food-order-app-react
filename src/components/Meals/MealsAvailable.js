import React from 'react';
import styles from './MealsAvailable.modules.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Margherita',
    description:
      'Topped with tomato, fresh sliced mozzarella, fresh basil, and extra-virgin olive oil.',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Marinara',
    description:
      'Topped with tomato, garlic, oregano, and extra-virgin olive oil.',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Margherita di Bufala',
    description:
      'Topped with tomato, sliced mozzarella di Bufala, fresh basil, and extra-virgin olive oil.',
    price: 26.99,
  },
  {
    id: 'm4',
    name: 'Diavola',
    description:
      'Topped with tomato, fresh sliced mozzarella, crushed chilli, spicy Spianata, and spicy extra-virgin olive oil.',
    price: 28.99,
  },
];

const MealsAvailable = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      productName={meal.name}
      productDescription={meal.description}
      productPrice={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
