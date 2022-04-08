import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// user-defined components
import { Form } from "./Form";
import { App } from "./App";
import { Footer } from "./components/Footer";

const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route index element={<App />} />
      <Route path="/form" element={<Form />} />
    </Routes>
    <Footer />
  </Router>
);