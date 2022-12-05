// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// TOASTS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// COMPONENTES
import Header from "./components/Header";
import Footer from "./components/Footer";

// PAGES
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Activate from "./pages/Activate";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/activate" element={<Activate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer theme="dark" />
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
