import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const ADMIN_ACCESS_CODE = import.meta.env.VITE_ADMIN_LOGIN_CODE || "admin123";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", adminCode: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.adminCode) {
        alert("Please enter the admin access code.");
        return;
      }

      if (ADMIN_ACCESS_CODE && formData.adminCode !== ADMIN_ACCESS_CODE) {
        alert("Invalid admin access code.");
        return;
      }

      const res = await loginUser(formData);
      const userData = res.data.user;

      if (userData.role !== "admin") {
        alert("This account is not an admin.");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("currentUser", userData.email);

      alert("Admin login success");
      window.dispatchEvent(new Event("authChange"));
      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "Admin login failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="adminCode"
          placeholder="Admin Access Code"
          value={formData.adminCode}
          onChange={handleChange}
          required
        />
        <button type="submit">Login as Admin</button>
      </form>
      <div className="auth-switch">
        <p>
          Regular user? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
