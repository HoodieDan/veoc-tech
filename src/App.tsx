import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/index.scss";
import AppFooter from "./components/AppFooter";
import NavBar from "./components/NavBar";
import Academy from "./pages/Academy";
import ContactUs from "./pages/Contact";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {

  return (
    <>
      <NavBar />

      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>

      <AppFooter />
    </>
  );
}

export default App;
