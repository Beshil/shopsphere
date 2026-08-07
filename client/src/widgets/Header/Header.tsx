import { NavLink } from "react-router-dom";
import { Button, Container } from "@/components/ui";
import { useTheme } from "@/app/providers/ThemeProvider";
import { ROUTES } from "@/routes/routes";
import styles from "./Header.module.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <NavLink className={styles.logo} to={ROUTES.HOME}>
          ShopSphere
        </NavLink>
        <nav aria-label="Основная навигация">
          <ul className={styles.navigation}>
            <li>
              <NavLink to={ROUTES.HOME}>Главная</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.PRODUCTS}>Товары</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.PROFILE}>Профиль</NavLink>
            </li>
          </ul>
        </nav>
        <Button
          aria-label={`Включить ${theme === "dark" ? "светлую" : "тёмную"} тему`}
          onClick={toggleTheme}
          size="sm"
          variant="outline"
        >
          {theme === "dark" ? "Светлая" : "Тёмная"}
        </Button>
      </Container>
    </header>
  );
};

export default Header;
