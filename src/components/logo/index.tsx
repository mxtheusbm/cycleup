import { TimerIcon } from "@phosphor-icons/react";

import styles from "./styles.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="/">
        <TimerIcon />
        <span>Cycleup</span>
      </a>
    </div>
  );
};
