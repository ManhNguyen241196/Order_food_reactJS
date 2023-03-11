import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import Modal from "./components/UI/Modal";

import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandle = () => {
    // hien thi gio hang
    setCartIsShown(true);
  };

  const hideCartHandle = () => {
    // hien thi gio hang
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Modal onClose={hideCartHandle} />}
      <h2>Let's get started!</h2>
      <Header onShowCart={showCartHandle}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
