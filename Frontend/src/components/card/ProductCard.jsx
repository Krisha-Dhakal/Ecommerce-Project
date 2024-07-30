import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false); // Local state to track if item is added to cart

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    // Set addedToCart to true when "Add to Cart" is clicked
    setAddedToCart(true);
    // You can also perform other actions here like showing a confirmation message
  };

  return (
    <>
      {product && (
        <section
          className={`relative flex flex-col items-start w-full shadow-md shadow-zinc-400 bg-white rounded-[4px] cursor-pointer overflow-hidden`}
          onClick={() => navigate(`/product/${product._id}`)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered
              ? "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 100%)"
              : "none",
          }}
        >
          {isHovered && !addedToCart && ( // Only show "Add to Cart" button if not already added
            <button
              className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
          <div className="p-4">
            <p className="py-1 px-3 bg-blue-800 text-white text-xs font-bold rounded-md">
              NEW
            </p>
          </div>
          <div className="border-b-2 w-full flex justify-center h-36 p-4">
            <img src={product?.image} alt="product" className="h-full" />
          </div>
          <div className="text-left p-4">
            <h2 className="font-bold text-xl uppercase line-clamp-2">
              {product.title}
            </h2>
            <p className="text-zinc-500 text-md font-semibold line-clamp-1">
              {product.description}
            </p>
            <p className="text-red-600 font-semibold">{product.price}</p>
            <div id="rating" className="flex items-center gap-2">
              <div className="flex text-[#FFD700]">
                {Array.from({ length: 5 }, (value, index) => {
                  return <FaRegStar color="#FFD700" key={index} />;
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductCard;
