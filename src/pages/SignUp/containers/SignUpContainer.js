import { useState } from "react";
import { useFormik } from "formik";

import SignUpLayout from "../components/SignUpLayout";

import { SignUpSchema } from "../validation";

const SignUpContainer = () => {
  const [modalActive, setModalActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      authentication: false,
      twoFactor: false,
      securityKey: false,
      biometrics: false,
    },

    validationSchema: SignUpSchema,

    onSubmit: (_, { resetForm }) => {
      setModalActive(true);

      setTimeout(() => {
        setModalActive(false);

        resetForm();
      }, 5000);
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
      modalActive={modalActive}
      setModalActive={setModalActive}
    />
  );
};

export default SignUpContainer;
