import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //truong hop add item đã tồn tại sẵn rồi
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id; //kiem tra xem san pham vua add so voi tat ca cac hang hoa trong gio hang
      //da ton tai hay chua. neu co chi cap nhat so luong . chua co moi them vao cuoi cung
    });
    const existingCartItem = state.items[existingCartItemIndex]; //lay ra dôi tuong tủng nhau
    //bang cach lay ra tu index của array chứa nó.
    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        //nếu đã tồn tại item đó thì nó sẽ giữ nguyên các thông số
        // của item tồn tại đó và chỉ đặt lại phần amount.
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; //update lại giá trị của item vùea
      //dk update trong array.
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    //dispatchAction se cung cap cac hanh dong tuong tac
    //voi chuoi du lieu dk gan ban dau
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
