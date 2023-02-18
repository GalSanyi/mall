import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import Shop from "../components/pages/Shop";
import Cart from "../components/pages/Cart";
import ProductDetails from "../components/pages/ProductDetails";
import Checkout from "../components/pages/Checkout";
import Signup from "../components/pages/Signup";
import Login from "./../components/pages/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
