import { useEffect, useState } from "react";
// import Login from "./pages/auth/Login";
// import Button from "./components/button/Button";
// import Modal from "./components/modal/Modal";
// import Counter from "./components/task/counter";
import ProductCard from "./components/card/ProductCard";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./navigation/MainRoute";
import Home from "./pages/home/Home";
import ProductProfile from "./pages/product/ProductProfile";

function App() {
  return (
    <>
      {/* <Home></Home> */}
      <MainRoutes />
      {/* <ProductProfile></ProductProfile> */}
    </>
  );
}

export default App;

// <div className=" h-screen flex justify-center items-center  ">
//   <Footer></Footer>
// </div>
// <ProductCard></ProductCard>
// modal={

// /* <Button title={title} onClick={() => setVisible(true)} />  }*/

/* <Counter />; */

// const [data, setData] = useState(999);
// const [title, setTitle] = useState("Login");

// const [isVisible, setVisible] = useState(false);

// useEffect-Tuts{

// const [sum, setSum] = useState(0);
// const [data_one, setData_one] = useState(10);
// const [data_two, setData_two] = useState(20);

// const calSum = () => {
//   setSum(data_one + data_two);
// };

// useEffect(() => {
//   calSum();
// }, [data_one, data_two]);
// ////
// // jsx
//  <section className="flex gap-6">
//         <Button
//           title="-"
//           className="bg-red-500 text-white text-xl w-8"
//           onClick={() => setData_one((prev) => prev - 1)}
//         ></Button>
//         {data_one}
//         <Button
//           title="+"
//           className="bg-red-500 text-white text-xl w-8"
//           onClick={() => setData_one((prev) => prev + 1)}
//         ></Button>
//       </section>
//       <section className="flex gap-6">
//         <Button
//           title="-"
//           className="bg-red-500 text-white text-xl w-8"
//           onClick={() => {
//             setData_two((prev) => prev - 1);
//           }}
//         ></Button>
//         {data_two}
//         <Button
//           title="+"
//           className="bg-red-500 text-white text-xl w-8"
//           onClick={() => setData_two((prev) => prev + 1)}
//         ></Button>
//       </section>
//       The sum is: {sum}
// }
