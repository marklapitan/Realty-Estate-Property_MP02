import { Route, Routes } from "react-router-dom";

//Impoprt the Components
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import ExploredPage from "./components/ExploredPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explored" element={<ExploredPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
