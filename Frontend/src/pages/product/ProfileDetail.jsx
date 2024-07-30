import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

// import

import Swal from "sweetalert2";
import Modal from "../../components/modal/Modal";
import CartItemCard from "../../components/card/CartItemCard";

const ProductDetail = ({ product }) => {
  const [isVisible, setVisible] = useState(false);
  const handleAddToCart = () => {
    const localData = localStorage.getItem("cartItem");

    const existingCartItems = localData ? JSON.parse(localData) : [];
    existingCartItems.push(product);
    localStorage.setItem("cartItem", JSON.stringify(existingCartItems));

    Swal.fire({
      title: "Successfully",
      text: "Added to Cart!",
      icon: "Success",
      confirmButtonText: "Cool",
    });

    console.log(existingCartItems);
  };

  const handleBuyNow = () => {
    setVisible(!isVisible);
  };

  const closeModal = () => {
    setVisible(!isVisible);
  };

  return (
    <div className=" flex-1 py-10 px-12 mx-auto ">
      <Modal isVisible={isVisible} onModalClose={closeModal}>
        <CartItemCard selectedProduct={product} closeModal={closeModal} />
      </Modal>
      <div className="flex flex-col gap-2" key={product.id}>
        {/* Title */}
        <h1 className="text-3xl font-bold uppercase line-clamp-2 font-lexend-deca">
          {product.title}
        </h1>

        <div>
          <p className="text-lg font-semibold text-zinc-400">
            {product.category}
          </p>
          <div className="flex gap-2">
            <p className="text-primary font-semibold text-xl">
              Price: {product.price}
            </p>
          </div>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, index) => {
            return <FaStar color="#FFD700" key={index} />;
          })}
          {/* <p>{product}</p> */}
        </div>
        {/* Brand */}
        <div className="w-xs">{product.description}</div>
        {/* actions */}
        <div className="flex justify-between gap-3">
          <div
            className="w-full bg-primary px-6 py-3 mt-2 rounded-lg text-center text-white font-semibold cursor-pointer"
            onClick={handleAddToCart}
          >
            Add To Cart
          </div>
          <div
            className="w-full bg-primary px-6 py-3 mt-2 rounded-lg text-center text-white font-semibold cursor-pointer"
            onClick={handleBuyNow}
          >
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
