import styles from "./index.module.scss";

const Chip = ({ text }) => {
  return (
    <div className={styles.chip}>
      <p className={styles.text}>{text}</p>

      <span className={styles.closebtn}>&times;</span>
    </div>
  );
};

export default Chip;
