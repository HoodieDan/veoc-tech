import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/index.scss";
import AppFooter from "./components/AppFooter";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Academy from "./pages/Academy";
import Blog from "./pages/Blog";
import BlogWriteUp from "./pages/BlogWriteup";
import Career from "./pages/Career";
import CareerDescription from "./pages/CareerDescription";
import ContactUs from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Services from "./pages/Services";

function App() {
    return (
        <div>
            <NavBar />

            <div className="routes">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/academy" element={<Academy />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/careers" element={<Career />} />
                    <Route path="/careers/:id" element={<CareerDescription />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogWriteUp />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:id" element={<Project />} />
                </Routes>
            </div>

            <AppFooter />
        </div>
    );
}

export default App;
