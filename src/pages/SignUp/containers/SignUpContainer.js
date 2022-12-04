import { useFormik } from "formik";

import SignUpLayout from "../components/SignUpLayout";

import { SignUpSchema } from "../validation";

const SignUpContainer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      authentication: false,
      twoFactor: false,
      securityKey: false,
      biometrics: false,
    },

    validationSchema: SignUpSchema,

    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));

      resetForm();
    },
  });

  return (
    <SignUpLayout
      values={formik.values}
      errors={formik.errors}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  );
};

export default SignUpContainer;
