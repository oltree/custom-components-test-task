import styles from "./index.module.scss";

const Button = ({ text, isDisabled, colors, size, icon, shadow, type }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${colors} ${size} ${icon} ${shadow}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
