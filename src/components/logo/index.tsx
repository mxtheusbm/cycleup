import { TimerIcon } from "@phosphor-icons/react";

import styles from "./styles.module.css";
import { RouterLink } from "../router-link";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href="/">
        <TimerIcon />
        <span>Cycleup</span>
      </RouterLink>
    </div>
  );
};
