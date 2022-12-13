import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPublicPage from "./pages/ProductsPublicPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/SignInPage";
import NavAdmin from "./components/NavAdmin";
import Dashboard from "./pages/admin/Dashboard";
import ProductsAdminPage from "./pages/admin/ProductsAdminPage";
import CreateNewProduct from "./pages/admin/CreateNewProduct";
import UpdatePage from "./pages/admin/UpdatePage";
import BuyPage from "./pages/BuyPage";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // default value comes from localStorage

  // variable to store all private routes including the nav bar
  const privateRoutes = (
    <>
      <NavAdmin setAuth={setIsAuth} />

      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products/" element={<ProductsAdminPage />} />
        <Route path="/admin/update/:id" element={<UpdatePage />} />
        <Route path="/admin/create" element={<CreateNewProduct />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </>
  );

  // variable to store all all public routes without nav bar
  const publicRoutes = (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPublicPage />} />
        <Route path="/buy/:id" element={<BuyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<SignInPage setAuth={setIsAuth} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );

  // if user is authenticated, show privateRoutes, else show publicRoutes
  return <main>{isAuth ? privateRoutes : publicRoutes}</main>;
}

export default App;
