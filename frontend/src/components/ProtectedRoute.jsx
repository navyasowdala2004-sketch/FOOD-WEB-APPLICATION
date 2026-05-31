import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Get token from localStorage
  const token = Storage.getItem("token");

  // If token exists allow access
  if (token) {
    return children;
  }

  // Otherwise redirect to login page
  return <Navigate to="/login" />;
}

export default ProtectedRoute;