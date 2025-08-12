import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../pages/home";
import { useEffect } from "react";

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
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
