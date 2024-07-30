import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { defaultSignUpValue, signUpSchema } from "./login_signupSchema";
import Input from "../../input/Input";
import Button from "../../button/Button";

const SignUpForm = () => {
  return (
    <main className="w-full bg-bg-white my-6">
      <section className="max-w-[1080px] mx-4 md:mx-auto flex justify-center items-center">
        <div className="w-2/3 md:w-2/5 bg-zinc-200 rounded-md overflow-hidden">
          <h1 className="uppercase text-center text-4xl font-semibold py-4 bg-primary text-white ">
            Sign up
          </h1>
          <div className="py-6 px-4">
            <Formik
              initialValues={defaultSignUpValue}
              validationSchema={signUpSchema}
              onSubmit={(values) => {
                console.log(values);
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
                    <Button
                      onClick={handleSubmit}
                      title="Sign up"
                      type="submit"
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
