import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const alreadyVisited =
      sessionStorage.getItem("foodhub_visited");

    if (alreadyVisited) {
      navigate("/home");
      return;
    }

    sessionStorage.setItem(
      "foodhub_visited",
      "true"
    );

    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="overlay">
        <h1 className="logo-animation">
          🍔 FOODHUB
        </h1>

        <p className="tagline">
          Delicious Food Delivered Fast
        </p>

        <div className="loader"></div>
      </div>
    </div>
  );
}

export default SplashScreen;