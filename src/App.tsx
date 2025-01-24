import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./assets/styles/index.scss";
import AppFooter from "./components/AppFooter";
import NavBar from "./components/NavBar";
import Academy from "./pages/Academy";
import ContactUs from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <NavBar />

      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>

      {pathname !== "/academy" && <AppFooter />}
    </>
  );
}

export default App;
