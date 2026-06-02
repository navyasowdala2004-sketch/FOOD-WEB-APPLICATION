import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLogin();

    window.addEventListener("authChange", checkLogin);

    return () =>
      window.removeEventListener("authChange", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    window.dispatchEvent(new Event("authChange"));

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>🍔 FoodHub</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/cart">Cart</Link>
         <Link to="/orders">Orders</Link>

        {/* AUTH SECTION */}
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;