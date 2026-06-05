import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAdmin } from "../services/authService";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerAdmin(formData);
      alert("Admin registration successful. Please login.");
      navigate("/admin-login");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "Admin registration failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <h2>Register Admin</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Admin Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Create Admin Account</button>
      </form>
      <div className="auth-switch">
        <p>
          Already have an admin account? <a href="/admin-login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
