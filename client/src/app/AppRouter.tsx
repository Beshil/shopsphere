import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import ProductsPage from "@/pages/ProductsPage/ProductsPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/pprofile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
