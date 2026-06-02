import { BrowserRouter, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { FoodProvider } from "./context/FoodContext";

function Layout() {
  const location = useLocation();

  const isSplashPage =
    location.pathname === "/";

  return (
    <>
      {!isSplashPage && <Navbar />}

      <AppRoutes />

      {!isSplashPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <FoodProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </FoodProvider>
  );
}

export default App;