import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

import { FoodProvider } from "./context/FoodContext";

function App() {
  return (
    <FoodProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </FoodProvider>
  );
}

export default App;