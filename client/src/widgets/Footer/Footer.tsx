import { Container } from "@/components/ui";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>© {new Date().getFullYear()} ShopSphere</p>
      </Container>
    </footer>
  );
};

export default Footer;
