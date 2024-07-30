import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { defaultSignUpValue, signUpSchema } from "../utils/formSchema";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { useState } from "react";

const SignUpForm = () => {
  const [togglePassword, setPassword] = useState(false);
  const handleShowpassword = (e) => {
    console.log(e.target.checked);
    setPassword(!togglePassword);
  };
  return (
    <main className="w-full bg-white my-6">
      <section className=" mx-4 md:mx-auto flex justify-center items-center">
        <div className="w-2/3 md:w-2/5 bg-zinc-100 rounded-md overflow-hidden">
          <h1 className="uppercase text-center text-4xl font-semibold py-4 bg-[#212121] text-white ">
            Sign up
          </h1>
          <div className="py-6 px-4">
            <Formik
              initialValues={defaultSignUpValue}
              validationSchema={signUpSchema}
              onSubmit={(values, action) => {
                console.log(values);
                action.resetForm();
              }}
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
                      placeholder="Fullname"
                      name="fullname"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.fullname && touched.fullname ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.fullname}
                      </div>
                    ) : null}
                    <Input
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.email}
                      </div>
                    ) : null}
                    <Input
                      placeholder="Mobile"
                      name="contact"
                      value={values.contact}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.contact && touched.contact ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.contact}
                      </div>
                    ) : null}
                    <Input
                      placeholder="Age"
                      name="age"
                      type="number"
                      value={values.age}
                      min={18}
                      max={40}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.age && touched.age ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.age}
                      </div>
                    ) : null}
                    <Input
                      placeholder="Password"
                      type={!togglePassword ? "password" : "text"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.password}
                      </div>
                    ) : null}
                    <Input
                      placeholder="Re-enter your password"
                      type={!togglePassword ? "password" : "text"}
                      name="c_password"
                      value={values.c_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.c_password && touched.c_password ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.c_password}
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
                      title="Sign up"
                      type="submit"
                      bgColor="#262626"
                    />
                  </Form>
                );
              }}
            </Formik>
            <Link
              to="/login"
              className="underline underline-offset-2 text-blue-600 my-2 text-center"
            >
              Already have an account ?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUpForm;
