import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import AdminDashboard from "../pages/AdminDashboard";
import AddFood from "../pages/AddFood";
import ManageOrders from "../pages/ManageOrders";
import ManageUsers from "../pages/ManageUsers";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import NotFound from "../pages/NotFound";
import Offers from "../pages/Offers";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes()  {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/food/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/add-food" element={<AddFood />} />
      <Route path="/admin/orders"element={<ManageOrders />}/>
      <Route path="/admin/users"element={<ManageUsers />}/>
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  );

  

}


export default AppRoutes;