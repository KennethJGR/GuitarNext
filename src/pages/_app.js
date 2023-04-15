import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      const cartUpdate = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });

      setCart([...cartUpdate]);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setCart([...cart, guitar]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (id) => {
    const cartUpdate = cart.filter((product) => product.id != id);
    setCart(cartUpdate);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateQuantity = (guitar) => {
    const cartUpdate = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = parseInt(guitar.quantity);
      }
      return guitarState;
    });
    setCart(cartUpdate);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <Component
      {...pageProps}
      cart={cart}
      addCart={addCart}
      deleteProduct={deleteProduct}
      updateQuantity={updateQuantity}
    />
  );
}
