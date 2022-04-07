import { FormHero } from "./components/Hero";
import { FormNavbar } from "./components/Navbar";

import "./Form.css";

export const Form = () => {
  return(
    <div  className="form-container">
      <header className="header">
        <FormNavbar />
        <div className="hero-only">
          <FormHero />
        </div>
      </header>
      <main >
        <form className="form">
          <legend><h1>Become a facilitator</h1></legend>
        </form>
      </main>
    </div>
  );
}