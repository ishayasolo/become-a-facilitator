import { Hero } from "./components/Hero";
import { CatchPhrase } from "./components/CatchPhrase";
import { Card } from "./components/card/Card";
import { Navbar } from "./components/Navbar";

import "./BecomeAFacilitator.css"

export const BecomeAFacilitator = () => {
  return (
    <div className="facilitator">
      <header className="header">
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