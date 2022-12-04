import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("This field cannot be empty"),
});
