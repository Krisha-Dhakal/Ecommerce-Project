import { Formik, Form } from "formik";
import { defaultFormValue, formSchema } from "./formSchema";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

const FormExample = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <main className="w-full bg-white">
      <div className="max-w-[1080px] mx-auto py-6">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={defaultFormValue}
          validationSchema={formSchema}
        >
          {({
            values,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleSubmit,
          }) => {
            console.log(values);
            return (
              <Form onSubmit={handleFormSubmit}>
                <Input
                  placeholder="Fullname"
                  name="name"
                  values={values.name}
                  type="text"
                  onChange={handleChange}
                />
                <Input
                  placeholder="Email"
                  name="email"
                  values={values.name}
                  type="email"
                  onChange={handleChange}
                />
                <Input
                  name="bookingDate"
                  values={values.name}
                  type="date"
                  onChange={handleChange}
                />
                <Input
                  placeholder="Age"
                  name="age"
                  values={values.name}
                  onChange={handleChange}
                  type="range"
                />
                <Input
                  onChange={handleChange}
                  values={values.name}
                  name="gender"
                  placeholder="Gender"
                  type="radio"
                />
                <Input
                  onChange={handleChange}
                  values={values.name}
                  name="contact"
                  placeholder="Contact"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </main>
  );
};

export default FormExample;
