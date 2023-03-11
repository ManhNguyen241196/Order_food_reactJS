import { useContext } from "react";

import classes from "./Cart.module.css";

import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes.cart_items}>
      {
        cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            ></CartItem>
          );
        }) //data item hàng trong 1 giỏ
      }
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span> Toltal amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button__alt} onClick={props.onCloseBtn}>
          {" "}
          Close
        </button>
        {hasItems && <button className={classes.button}> Order</button>}
      </div>
    </div>
  );
};

export default Cart;
