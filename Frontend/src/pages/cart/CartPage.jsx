// CartPage.jsx
import React, { useState } from "react";
import AddToCart from "../../components/card/addToCart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItem")) || []);

  // Function to remove item from cart
  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCartItems);
    // Update localStorage
    localStorage.setItem("cartItem", JSON.stringify(updatedCartItems));
  };

  return (
    <main className="w-full p-4">
      <section className="max-w-[1340px] mx-auto flex flex-col gap-3 justify-center items-center">
        {!cartItems.length && (
          <p className="italic text-slate-600 text-center text-[24px] font-[500] my-48">
            You have 0 items in your cart
          </p>
        )}
        {cartItems.length > 0 && (
          <h1 className="text-center font-semibold text-xl underline">
            My Cart
          </h1>
        )}

        {cartItems.map((item, index) => (
          <AddToCart key={index} item={item} onRemove={removeFromCart} />
        ))}
      </section>
    </main>
  );
};

export default CartPage;
