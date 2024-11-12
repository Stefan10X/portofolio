import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";

const App = () => {
  //Scroll la y=0 cand dau refresh la pagina
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
