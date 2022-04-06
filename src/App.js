import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/card/Card";

import "./App.css"
import "./font/font.css"

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}