import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";

import { getAllOrder, login } from "../services/apiService";
import { defaultLoginValue, loginSchema } from "../utils/formSchema";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { AuthContext } from "../hooks/customContextHook/AuthProvider";

const Login = () => {
  const [togglePassword, setPassword] = useState(false);

  const { tokenSetter } = useContext(AuthContext);

  const handleShowpassword = (e) => {
    console.log(e.target.checked);
    setPassword(!togglePassword);
  };

  const handleFormSubmit = async (data, action) => {
    console.log(data);
    try {
      let response = await login({
        username: data.username,
        password: data.password,
      });
      Swal.fire({
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 2000,
      });

      tokenSetter(response.data.token);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Credentials Invalid",
        showConfirmButton: false,
        timer: 2000,
      });
      action.resetForm();
      console.error("Error:", error.message);
    }
  };

  return (
    <main className="w-full bg-white my-6">
      <section className=" mx-4 md:mx-auto w-full flex justify-center items-center">
        <div className="w-2/3 md:w-2/5 bg-zinc-100 rounded-md overflow-hidden">
          <h1 className="uppercase text-center text-4xl font-semibold py-4 bg-[#212121] text-white ">
            Login
          </h1>
          <div className="py-6 px-4">
            <Formik
              initialValues={defaultLoginValue}
              validationSchema={loginSchema}
              onSubmit={handleFormSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
              }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <Input
                      placeholder="Username"
                      name="username"
                      value={values.username ?? "admin"}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.username}
                      </div>
                    ) : null}

                    <Input
                      placeholder="Password"
                      type={!togglePassword ? "password" : "text"}
                      name="password"
                      value={values.password ?? "admin"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.password && touched.password ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.password}
                      </div>
                    ) : null}
                    <div className="flex gap-2 p-1">
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        id="passwordToggle"
                        onChange={handleShowpassword}
                      />
                      <label
                        htmlFor="passwordToggle"
                        className="cursor-pointer"
                      >
                        Show password
                      </label>
                    </div>

                    <Button
                      onClick={handleSubmit}
                      title="Login"
                      type="submit"
                      bgColor="#262626"
                    />
                  </Form>
                );
              }}
            </Formik>
            <Link
              to="/signup"
              className="underline underline-offset-2 text-blue-600 my-2 text-center"
            >
              Not registered yet ?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
