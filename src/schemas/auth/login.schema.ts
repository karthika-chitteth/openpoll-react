import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("* Email field is required")
    .email("* Please enter a valid email"),

  password: Yup.string()
  .required("* Password is required"),
});
