import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ProductDetail from "../Pages/ProductDetail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
