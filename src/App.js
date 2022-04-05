import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

import "./App.css"

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}