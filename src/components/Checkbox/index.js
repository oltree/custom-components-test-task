import styles from "./index.module.scss";

const Checkbox = ({ text, name, type, value, onChange, disabled }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>

      <label className={`${styles.label} ${styles.check}`}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <div className={styles.slider}>
          <div className={styles.knob}></div>
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
