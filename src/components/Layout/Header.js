import React from "react";

import MealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1> ReactMeals </h1>
        <HeaderCartButton onClick={props.onShowCart}> </HeaderCartButton>
      </header>
      <div className={classes.mainImage}>
        <img alt="Meals" src={MealsImg} />
      </div>
    </>
  );
};

export default Header;
