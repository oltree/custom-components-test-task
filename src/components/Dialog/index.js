import Button from "../Button";

import styles from "./index.module.scss";

const Dialog = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>What type of work would you like todo?</div>

      <div className={styles.buttons}>
        <Button
          type="submit"
          text="Regular Cleaning"
          colors={styles.colorRed}
          size={styles.size}
          icon={styles.icon}
        />
        <Button
          type="submit"
          text="Window Cleaning"
          colors={styles.colorWhite}
          size={styles.size}
          icon={styles.icon}
          shadow={styles.shadow}
        />
        <Button
          type="submit"
          text="After Repairing"
          colors={styles.colorWhite}
          size={styles.size}
          icon={styles.icon}
          shadow={styles.shadow}
        />
        <Button
          type="submit"
          text="After Relocation"
          colors={styles.colorRed}
          size={styles.size}
          icon={styles.icon}
        />
      </div>

      <div className={styles.backOrNext}>
        <Button
          type="submit"
          text="Back"
          colors={styles.colorBack}
          size={styles.size}
          shadow={styles.shadow}
        />
        <Button
          type="submit"
          text="Next"
          colors={styles.colorNext}
          size={styles.size}
          shadow={styles.shadow}
        />
      </div>
    </div>
  );
};

export default Dialog;
