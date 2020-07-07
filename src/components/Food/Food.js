import React from 'react';
import classes from './Food.module.scss';
import FoodIngredient from './FoodIngredient/FoodIngredient';

const Food = (props) => {
  let ingredientElements = [];
  for (let key in props.ingredients) // Getting the key (salad,cheese etc.)
    for (let i = 0; i < props.ingredients[key]; i++) {
      // props.ingredients[key] = 1 <- value for given key
      ingredientElements.push(<FoodIngredient key={key + i} type={key} />);
    }

  if (ingredientElements.length === 0) {
    ingredientElements = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Food}>
      <FoodIngredient type="roll-top" />
      {ingredientElements}
      <FoodIngredient type="roll-bottom" />
    </div>
  );
};

export default Food;
