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

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};
