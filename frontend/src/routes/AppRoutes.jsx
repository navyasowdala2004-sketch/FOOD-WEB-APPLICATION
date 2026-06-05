import { Routes, Route } from "react-router-dom";

import SplashScreen from "../pages/SplashScreen";
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
import AdminLogin from "../pages/AdminLogin";
import AddFood from "../pages/AddFood";
import ManageOrders from "../pages/ManageOrders";
import ManageUsers from "../pages/ManageUsers";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import NotFound from "../pages/NotFound";
import Offers from "../pages/Offers";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

function AppRoutes()  {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/food/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/admin/add-food" element={<AdminRoute><AddFood /></AdminRoute>} />
      <Route path="/admin/orders" element={<AdminRoute><ManageOrders /></AdminRoute>} />
      <Route path="/admin/users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  

}


export default AppRoutes;