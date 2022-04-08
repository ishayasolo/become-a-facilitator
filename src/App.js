import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// user-defined components
import { BecomeAFacilitator } from "./pages/BecomeAFacilitator";
import { Form } from "./pages/Form";
import { Footer } from "./pages/components/Footer";

// component stylesheets
import "./font/font.css"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BecomeAFacilitator />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}