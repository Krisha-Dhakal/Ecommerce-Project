import { useEffect, useState } from "react";
import SectionTitle from "../../components/Typography/SectionTitle";
import ProductCard from "../../components/card/ProductCard";

const FeatureProduct = ({ productList }) => {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response2 = await fetch("http://localhost:8000/v1/api/product");

  //       const json2 = await response2.json();

  //       setProductList(json2.data);
  //     } catch (error) {
  //       console.log(error);
  //       throw new Error(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] ">
        <SectionTitle title="Featured Products" />
        <div className=" mx-4 md:mx-auto max-w-[1080px] grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* {Array.from({ length: 8 }, (_, index) => {
            return <ProductCard key={index} id={index + 20} />;
          })} */}

          {productList?.slice(0, 8).map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
