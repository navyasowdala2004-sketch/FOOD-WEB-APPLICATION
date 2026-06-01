import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    const res = await loginUser(formData);

    localStorage.setItem("token", res.data.token);

    alert("Login Success");

    window.dispatchEvent(new Event("authChange"));

    navigate("/");
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;