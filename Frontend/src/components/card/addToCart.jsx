import React, { useState } from "react";
import Modal from "../modal/Modal";
import CartItemCard from "./CartItemCard";

const AddToCart = ({ item, onRemove }) => {
  const [isVisible, setVisible] = useState(false);

  const handleBuyNow = () => {
    setVisible(!isVisible);
  };

  const closeModal = () => {
    setVisible(!isVisible);
  };

  const handleRemove = () => {
    onRemove(item); // Call the onRemove function with the item to remove it from the cart
  };

  return (
    <main className="flex gap-2 items-start shadow rounded-[7px] min-w-[860px] max-w-[870px] ">
      <Modal isVisible={isVisible} onModalClose={closeModal}>
        <CartItemCard selectedProduct={item} closeModal={closeModal} />
      </Modal>
      <div className="size-40 min-w-[150px] border-r-2">
        <img
          src={item.image}
          alt="productImg"
          className="object-cover w-full"
        />
      </div>
      
      <div className="p-4 w-full">
        <p className="text-3xl font-semibold">{item.title}</p>
        <p className="line-clamp-1">{item.description}</p>
        <p className="font-light text-xl">{item.category}</p>
        <div className="w-full text-primary text-2xl font-semibold flex justify-between items-center">
          {item.price}
          <div className="flex items-center">
            <span
              className="w-max text-sm bg-primary px-4 py-2 rounded-lg text-center text-white font-semibold cursor-pointer"
              onClick={handleBuyNow}
            >
              Buy Now
            </span>
            {/* Add some space between Buy Now and Remove */}
            <div style={{ marginLeft: "8px" }}></div>
            <span
              className="w-max text-sm bg-primary px-4 py-2 rounded-lg text-center text-white font-semibold cursor-pointer"
              onClick={handleRemove}>
              Remove
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddToCart;
