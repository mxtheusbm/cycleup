import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../pages/home";
import { useEffect } from "react";
import { About } from "../pages/about";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro" element={<About />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
