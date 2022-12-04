import styles from "./index.module.scss";

const Input = ({
  text,
  name,
  type,
  value,
  onChange,
  disabled,
  onBlur,
  errors,
  touched,
}) => (
  <>
    <div className={styles.wrapper}>
      <input
        title={name}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={text}
        className={styles.field}
        onBlur={onBlur}
      />
      <label htmlFor={name} className={styles.label}>
        {text}
      </label>
      {errors.email && touched.email ? (
        <div className={styles.error}>{errors.email}</div>
      ) : null}
    </div>
  </>
);

export default Input;
