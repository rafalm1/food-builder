import React from 'react';
import classes from './Logo.module.scss';
import logo from '../../assets/images/logo.PNG';

const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={logo} alt="Burger"></img>
  </div>
);

export default Logo;
