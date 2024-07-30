import { useParams } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import ProductDetail from "./ProfileDetail";
import { useEffect, useState } from "react";

const ProductProfile = () => {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await fetch(
          `http://localhost:8000/v1/api/product/${id}`
        );

        const json2 = await response2.json();
        // console.log(json2, "fetchedProduct");

        setProduct(json2);
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full ">
        <div className="max-w-[1280px] mx-auto flex flex-col my-6  md:px-2 md:flex-row md:items-center">
          <ProductGallery productImage={product?.image} />
          <ProductDetail product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductProfile;
