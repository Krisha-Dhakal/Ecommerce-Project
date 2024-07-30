import React, { useState } from "react";
import NewProduct from "../../components/card/NewProduct";

const ProductPage = ({ filteredData }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      {filteredData.map((product) => (
        <NewProduct
          key={product._id}
          product={product}
          onAddToCart={addToCart} // Pass addToCart function as prop
        />
      ))}
    </div>
  );
};

export default ProductPage;
