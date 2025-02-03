import { Routes, Route } from "react-router-dom";
import { Login } from "../containers/login/Login";
import { Register } from "../containers/register/Register";
import { Products } from "../containers/products/Products";
import { Hotels } from "../containers/hotels/Hotels";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hotels" element={<Products />} />
      <Route path="/list/hotels" element={<Hotels />} />
    </Routes>
  );
}
