import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const NewProduct = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log("Product added to cart:", product.title);
  };

  return (
    <>
      {product && (
        <section
          className="relative flex flex-col items-start w-full shadow-lg shadow-zinc-400 rounded-lg cursor-pointer overflow-hidden"
          onClick={() => navigate(`/product/${product._id}`)}
          onMouseEnter={handleMouseEnter} // Handle mouse enter event
          onMouseLeave={handleMouseLeave} // Handle mouse leave event
        >
          <div className="p-4">
            <p className="py-1 px-3 bg-blue-900 text-white text-xs font-semibold shadow-xl rounded-md">
              NEW
            </p>
          </div>
          <div className="border-b-2 w-full flex justify-center h-36 p-4">
            <img src={product.image} alt="product" className="h-full" />
          </div>
          <div className="text-left p-4">
            <h2 className="font-bold text-xl uppercase line-clamp-2">
              {product.title}
            </h2>
            <p className="text-zinc-500 text-md font-semibold line-clamp-1">
              {product.description}
            </p>
            <p className="text-red-600 font-semibold ">{product.price}</p>
            <div id="rating" className="flex items-center gap-2">
              <div className="flex text-[#FFD700]">
                {Array.from({ length: 5 }, (value, index) => {
                  return <FaRegStar color="#FFD700" key={index} />;
                })}
              </div>
            </div>
          </div>
          {/* Add to Cart button */}
          {isHovered && (
            <button
              className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default NewProduct;
