import HomeCard from "../../components/homeCard/HomeCard";
import { FaAddressCard, FaCartArrowDown } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";
import BarGraph from "../../components/barGraph/BarGraph";
import LineGraph from "../../components/lineGraph/LineGraph";
import { useEffect, useState } from "react";
import { getAllOrder, getAllProducts } from "../../services/apiService";
import { loginSchema } from "../../utils/formSchema";
const Home = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const homeCardMapList = [
    {
      id: 1,
      title: "Orders",
      count: orderCount,
      icon: <FaCartArrowDown />,
      bgColor: "#763996",
    },
    {
      id: 2,
      title: "Messages",
      count: 25,
      icon: <FaAddressCard />,
      bgColor: "#395996",
    },
    {
      id: 3,
      title: "Inventory",
      count: productCount,
      icon: <RiTodoFill />,
      bgColor: "#399676",
    },
  ];

  useEffect(() => {
    const dashboardCount = async () => {
      const orderResponse = await getAllOrder("");
      const productResponse = await getAllProducts("");
      console.log(orderResponse);
      setOrderCount(orderResponse.data.orders.length);
      setProductCount(productResponse.data.products.length);
      // console.log(productResponse.data.);
    };

    dashboardCount();
  }, []);
  return (
    <main className="h-full flex flex-col gap-2">
      <div className="flex flex-col md:flex-row gap-2 w-full " id="upperDiv">
        {homeCardMapList.map((card) => {
          return (
            <div key={card.id} className="relative flex-1">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://i.pinimg.com/236x/1a/43/fc/1a43fc013c98d8d3747ef32f25ff438b.jpg"
                  alt="icon"
                  className="h-full w-full object-cover opacity-25"
                />
              </div>
              <HomeCard
                key={card.id}
                title={card.title}
                count={card.count}
                icon={card.icon}
                bgColor={card.bgColor}
              />
            </div>
          );
        })}
      </div>
      <div
        id="loweDiv"
        className="h-full w-full flex flex-col md:flex-row gap-2"
      >
        <div className="flex-1 w-full">
          <BarGraph></BarGraph>
        </div>
        <div className="flex-1 w-full">
          <LineGraph></LineGraph>
        </div>
      </div>
    </main>
  );
};

export default Home;
