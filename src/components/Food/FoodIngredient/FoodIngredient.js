import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './FoodIngredient.module.scss';

class FoodIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'roll-bottom':
        ingredient = <div className={classes.RollBottom}></div>;
        break;
      case 'roll-top':
        ingredient = (
          <div className={classes.RollTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
            <div className={classes.Seeds3}></div>
          </div>
        );
        break;
      case 'ketchup':
        ingredient = <div className={classes.Ketchup}></div>;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case 'garlic':
        ingredient = <div className={classes.Garlic}></div>;
        break;
      case 'frankfurter':
        ingredient = (
          <div className={classes.Frankfurter}>
            <div className={classes.Cut}></div>
            <div className={classes.Cut}></div>
            <div className={classes.Cut}></div>
          </div>
        );
        break;
      case 'sausage':
        ingredient = <div className={classes.Sausage}></div>;
        break;
      case 'salad':
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

FoodIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FoodIngredient;
