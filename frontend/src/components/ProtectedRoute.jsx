import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Get token from localStorage
  const token = localStorage.getItem("token");

  // If token exists allow access
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

export default ProtectedRoute;