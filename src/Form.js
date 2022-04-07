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
        <form className="form" id="form">
          <h2>Become a facilitator</h2>
          <div className="flex-column">
            <label for="name">Applicant Type</label>
            <input type="text" id="name" value="facilitator" disabled/>
          </div>
          <div className="flex-column">
            <div className="flex-row">
              <div className="flex-row-item">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" required/>
              </div>
              <div className="flex-row-item">
                <label for="last-name">Last name</label>
                <input type="text" id="last-name" required/>
              </div>
            </div>
          </div>
          <div className="flex-column">
            <div className="flex-row">
              <div className="flex-row-item">
                <label for="email">Email Address</label>
                <input type="email" id="email" required/>
              </div>
              <div className="flex-row-item">
                <label for="address">Location</label>
                <input type="address" id="address" />
              </div>
            </div>
          </div>
          <div className="flex-column">
            <div className="flex-row">
              <div className="flex-row-item">
                <label for="">LinkedIn Profile</label>
                <input type="text" id="" />
              </div>
              <div className="flex-row-item">
                <label for="website">Website</label>
                <input type="text" id="website" />
              </div>
            </div>
          </div>
          <div className="flex-column">
            <label for="github-profile">GitHub Profile</label>
            <input type="text" id="github-profile" />
          </div>
          <div className="flex-column">
            <div className="flex-row">
              <div className="flex-row-item">
                <label for="current-role">Current Role</label>
                <input type="text" id="current-role" />
              </div>
              <div className="flex-row-item">
                <label for="current-organisation">Current Organisation</label>
                <input type="text" id="current-organisation" />
              </div>
            </div>
          </div>
          <div className="flex-column">
            <label for="xp">Do you have a previous facilitating experience?</label>
            <select type="text" id="xp" required>
              <option value="">select an option</option>
              <option value="No Experience">No Experience</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Professional">Professional</option>
            </select>
          </div>
          <div className="flex-column">
            <label>Select training course of interest</label>
            <select type="text" id="course" required>
              <option value="">select an option</option>
              <option value="No Experience">JavaScript</option>
              <option value="Beginner">DevOps Engineering</option>
              <option value="Intermediate">Product Design</option>
            </select>
          </div>
          
          <div className="flex-column">
            <label for=""></label>
            <input type="text" id="" />
          </div>
          <div className="flex-column">
            <label for="about-self">Tell us a little about the products you have built in the past and how they added value to your users </label>
            <textarea type="text" id="about-self"required></textarea>
          </div>
          <div className="flex-column">
            <label for="salary">Salary expectation</label>
            <input type="number" id="salary" required/>
          </div>
          <div className="flex-column">
            <label for="file">CV/Resume</label>
            <input type="file" id="file" required/>
          </div>
          <div className="flex-column">
            <input type="submit" id="submit" value="Submit application" />
          </div>
        </form>
      </main>
    </div>
  );
}