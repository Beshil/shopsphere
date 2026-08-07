import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import { Container } from "@/components/ui";

import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
