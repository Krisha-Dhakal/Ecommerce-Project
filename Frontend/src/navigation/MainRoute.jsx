import { Routes, Route } from "react-router";
import Contact from "../pages/contactus/Contact";
import Home from "../pages/home/Home";
import Service from "../pages/services/Service";
import Footer from "../components/Footer/Footer";
import ProductProfile from "../pages/product/ProductProfile";
import Navbar from "../components/navbar/Navbar";
// import ProductDetail from "../pages/product/ProfileDetail";
import Product from "../pages/product/Product";
import FormExample from "../components/task/formik_yup_practice/Form";
import LoginForm from "../components/task/login_signup/LoginForm";
import SignUpForm from "../components/task/login_signup/SignUp";
import CartPage from "../pages/cart/CartPage";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/myCart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductProfile />} />
        <Route path="/form" element={<FormExample />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
