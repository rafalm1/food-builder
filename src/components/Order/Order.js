import React from 'react';
import classes from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Order = (props) => {
  const ingredients = [];

  for (let ingrName in props.ingredients) {
    ingredients.push({
      name: ingrName,
      amount: props.ingredients[ingrName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <div className={classes.Icon} onClick={props.delete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>zł {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
