import { RouterLink } from "../router-link";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">
        Entenda como funciona a técnica pomodoro
      </RouterLink>
    </footer>
  );
};
