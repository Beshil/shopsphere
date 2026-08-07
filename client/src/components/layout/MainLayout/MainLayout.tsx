import Layout from "@/widgets/Layout";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
