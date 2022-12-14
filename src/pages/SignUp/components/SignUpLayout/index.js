import Input from "../../../../components/Input";
import Checkbox from "../../../../components/Checkbox";
import Chip from "../../../../components/Chip";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Dialog";

import stylesButton from "../../../../components/Button/index.module.scss";
import styles from "./index.module.scss";

const SignUpLayout = ({
  values,
  errors,
  onChange,
  onSubmit,
  onBlur,
  touched,
  modalActive,
  setModalActive,
}) => {
  const user = Object.entries(values);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign In</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          text="Email*"
          name="email"
          type="email"
          disabled=""
          value={values.email}
          onChange={onChange}
          onBlur={onBlur}
          errors={errors}
          touched={touched}
        />

        <Checkbox
          text="Email Authentication"
          name="authentication"
          type="checkbox"
          disabled=""
          value={values.email}
          onChange={onChange}
        />

        <Checkbox
          text="Sign in with biometrics"
          name="biometrics"
          type="checkbox"
          disabled=""
          value={values.email}
          onChange={onChange}
        />

        <Chip text="Oleg Melekh" />

        <Button
          type="submit"
          text="SIGN IN"
          colors={stylesButton.colors}
          size={stylesButton.size}
          icon={stylesButton.icon}
          shadow={stylesButton.shadow}
        />
      </form>

      <Modal active={modalActive} setActive={setModalActive}>
        {user.map(([key, value]) => (
          <div key={key}>{`${key}: ${value}`}</div>
        ))}
      </Modal>
    </div>
  );
};

export default SignUpLayout;
