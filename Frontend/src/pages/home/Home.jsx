import FeatureProduct from "./FeatureProducts";
import ExploreNew from "./ExploreNew";
import Banner from "../../components/banner/Banner";
import HeroBanner from "./Hero";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/apiService";


const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getProducts({});
        console.log(response);
        setProductList(response.data.products);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(productList);
  return (
    <div>
      <HeroBanner bgColor="#A6C0DB" />
      <FeatureProduct productList={productList} />
      <Banner
        // bgColor="#B7D7E4"
        bgColor="#F9A61B"
        url="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
        // url="assets/frame.png"
      />
      
      <ExploreNew productList={productList} />
      <Banner
        bgColor="#fffff"
        url="assets/banner1.jpg"
      />
    </div>
  );
};

export default Home;
