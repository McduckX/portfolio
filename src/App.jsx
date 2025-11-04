import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { ProjectDetail } from "./components/ProjectDetail";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!isLoaded) return;
        const hash = location.hash;
        const id = hash ? hash.substring(1) : "";
        if (id) {
            // Defer to ensure target sections are mounted
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 0);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.pathname, location.hash, isLoaded]);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
            <div
                className={`min-h-screen transition-opacity duration-700 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } bg-black text-gray-100`}
            >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                                <About />
                                <Projects />
                                <Contact />
                            </>
                        }
                    />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                </Routes>
            </div>
        </>
    );
}

export default App;