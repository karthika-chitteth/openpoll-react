import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("* Email field is required")
    .email("* Please enter a valid email"),
  name: Yup.string().required("* Name field is required"),
  password: Yup.string()
    .min(8, "* Password should be at least 8 characters")
    .required("* Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), ""],
    "Passwords must match"
  ),
});
