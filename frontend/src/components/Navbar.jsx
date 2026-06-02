import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
   console.log("Home page loaded");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
  localStorage.removeItem("user");
  localStorage.removeItem(
    "currentUser"
  );

  setIsLoggedIn(false);

  window.dispatchEvent(
    new Event("authChange")
  );

  navigate("/login");
};
  const isActive = (path) => {
    return location.pathname === path || location.pathname === `/home` && path === "/home";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-brand">
        <h2>🍔 FoodHub</h2>
      </Link>

      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/home" 
          className={`nav-link ${isActive("/home") ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/menu" 
          className={`nav-link ${isActive("/menu") ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Menu
        </Link>
        <Link 
          to="/offers" 
          className={`nav-link ${isActive("/offers") ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Offers
        </Link>
        <Link 
          to="/cart" 
          className={`nav-link ${isActive("/cart") ? 'active' : ''}`}
          onClick={closeMenu}
        >
          🛒 Cart
        </Link>
        <Link 
          to="/orders" 
          className={`nav-link ${isActive("/orders") ? 'active' : ''}`}
          onClick={closeMenu}
        >
          📦 Orders
        </Link>

        {/* AUTH SECTION */}
        <div className="auth-section">
          {!isLoggedIn ? (
            <>
              <Link 
                to="/login" 
                className="nav-link"
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="nav-link register-link"
                onClick={closeMenu}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/profile" 
                className={`nav-link ${isActive("/profile") ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Profile
              </Link>
              <button className="logout-btn" onClick={() => {
                handleLogout();
                closeMenu();
              }}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;