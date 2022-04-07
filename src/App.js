import { Hero } from "./components/Hero";
import { CatchPhrase } from "./components/CatchPhrase";
import { Card } from "./components/card/Card";
import { Navbar } from "./components/Navbar";

// component stylesheets
import "./App.css"
import "./font/font.css"

export const App = () => {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="main">
        <CatchPhrase />
        <Card />
      </main>
    </div>
  );
}