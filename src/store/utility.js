export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const orderForm = (type, configType, configText, value) => {
  if (configText === 'delivery') {
    return {
      elementType: type,
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'Cheapest' },
        ],
      },
      value: value,
      validation: {},
      valid: false,
    };
  } else if (configText === 'ZIP CODE') {
    return {
      elementType: type,
      elementConfig: {
        type: configType,
        placeholder: configText,
      },
      value: value,
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    };
  } else if (configText === 'Your E-Mail') {
    return {
      elementType: type,
      elementConfig: {
        type: configType,
        placeholder: configText,
      },
      value: value,
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    };
  } else {
    return {
      elementType: type,
      elementConfig: {
        type: configType,
        placeholder: configText,
      },
      value: value,
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    };
  }
};
