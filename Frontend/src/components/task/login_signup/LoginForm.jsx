import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { defaultLoginValue, loginSchema } from "./login_signupSchema";
import Input from "../../input/Input";
import Button from "../../button/Button";

const LoginForm = () => {
  return (
    <main className="w-full bg-bg-white my-6">
      <section className="max-w-[1080px] mx-4 md:mx-auto flex justify-center items-center">
        <div className="w-2/3 md:w-2/5 bg-zinc-200 rounded-md overflow-hidden">
          <h1 className="uppercase text-center text-4xl font-semibold py-4 bg-primary text-white ">
            Login
          </h1>
          <div className="py-6 px-4">
            <Formik
              initialValues={defaultLoginValue}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                console.log(values);
                console.log("Form submitted");
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
                console.log(values);
                console.log("Form changed");
                return (
                  <Form onSubmit={handleSubmit}>
                    <Input
                      placeholder="Username"
                      name="username"
                      value={values.username}
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
                      placeholder="Password"
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
                    <Button
                      onClick={handleSubmit}
                      title="Login"
                      type="submit"
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

export default LoginForm;
