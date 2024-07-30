import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Name cannot be empty"),
  email: yup.string().email("Invalid ").required("Email cannot be empty "),
  password: yup.string().required("Password cannot be empty"),
  gender: yup.string(),
  contact: yup.string(),
  age: yup
    .number()
    .positive()
    .integer()
    .min(18, "You must be above 18")
    .max(40, "You cannot be older than 40")
    .required(),
  bookingDate: yup.date(),
});

export const defaultFormValue = {
  name: "",
  email: "",
  password: "",
  gender: "",
  contact: null,
  age: null,
  bookingDate: null,
};

// List
