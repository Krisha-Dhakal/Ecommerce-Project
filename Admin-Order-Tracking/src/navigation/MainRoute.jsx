import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import PrivateRoute from "./protectedRoute";
import Layout from "../pages/Layout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import NewProduct from "../pages/product/NewProduct";
import Order from "../pages/order/Order";

import AuthLayout from "../pages/AuthLayout";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import { AuthContext } from "../hooks/customContextHook/AuthProvider";
import { useContext } from "react";
import ProductList from "../pages/product/ProductList";

export const DashboardRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route
        index
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/product"
        element={
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        }
      />
      <Route
        path="/product/add_product"
        element={
          <PrivateRoute>
            <NewProduct />
          </PrivateRoute>
        }
      />

      <Route
        path="/product/edit/:id"
        element={
          <PrivateRoute>
            <NewProduct />
          </PrivateRoute>
        }
      />

      <Route
        path="/order"
        element={
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        }
      />
    </Route>
  )
);

export const AuthRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

export const MainRoute = () => {
  const { token } = useContext(AuthContext);
  return <RouterProvider router={token ? DashboardRoute : AuthRoute} />;
};
