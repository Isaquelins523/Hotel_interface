import { Routes, Route, useLocation } from "react-router-dom";
import { Login } from "../containers/login/Login";
import { Register } from "../containers/register/Register";
import { Products } from "../containers/products/Products";
import { Hotels } from "../containers/hotels/Hotels";
import Navbar from "../components/Navbar";

export default function Router() {
  const location = useLocation();
  const hideNavbarOn = ["/login", "/register"];

  return (
    <>
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotels" element={<Products />} />
        <Route path="/" element={<Hotels />} />
      </Routes>
    </>
  );
}
