import {
  ClockCounterClockwiseIcon,
  GearIcon,
  HouseIcon,
  MoonIcon,
  SunIcon,
} from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { RouterLink } from "../router-link";

type AvailableThemes = "dark" | "light";

const nextThemeIcon = {
  dark: <SunIcon />,
  light: <MoonIcon />,
};

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailableThemes;
    return storageTheme || "dark";
  });

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href="/history/"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <ClockCounterClockwiseIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href="/settings/"
        aria-label="Configurações"
        title="Configurações"
      >
        <GearIcon />
      </RouterLink>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
};
