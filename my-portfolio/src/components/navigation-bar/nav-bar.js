//Navbar
// import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./nav-bar.css";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [changedTheme, setChangedTheme] = useState(false);

  const clickBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeBackground = () => {
    toggleTheme();
    // console.log("changed theme");
    setChangedTheme(!changedTheme);
  };

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
      window.history.replaceState(null, "", window.location.pathname); // Clear the # from the URL
    }
  };

  return (
    <>
      <nav>
        <ul className={`topnav ${isMenuOpen ? "responsive" : ""}`}>
          <li>
            {/* <Link to="/main/aboutme" className="nav-bar-text">About Me</Link> */}
            <a
              href="#about-block"
              onClick={() => handleLinkClick("about-block")}
              className="nav-bar-text"
            >
              About Me
            </a>
          </li>
          <li>
            {/* <Link to="/main/education" className="nav-bar-text">Education</Link> */}
            <a
              href="#edu-block"
              onClick={() => handleLinkClick("edu-block")}
              className="nav-bar-text"
            >
              Education
            </a>
          </li>
          <li>
            {/* <Link to="/main/skills" className="nav-bar-text">Skills</Link> */}
            <a
              href="#skill-block"
              onClick={() => handleLinkClick("skill-block")}
              className="nav-bar-text"
            >
              Skills
            </a>
          </li>
          <li>
            {/* <Link to="/main/works" className="nav-bar-text">Works</Link> */}
            <a
              href="#work-block"
              onClick={() => handleLinkClick("work-block")}
              className="nav-bar-text"
            >
              Works
            </a>
          </li>
          <li>
            {/* <Link to="/main/projects" className="nav-bar-text">Projects</Link> */}
            <a
              href="#project-block"
              onClick={() => handleLinkClick("projet-block")}
              className="nav-bar-text"
            >
              Projects
            </a>
          </li>
          <li>
            {/* <Link to="/main/contact" className="nav-bar-text">Contact Me</Link> */}
            <a
              href="#contact-block"
              onClick={() => handleLinkClick("contact-block")}
              className="nav-bar-text"
            >
              Contact Me
            </a>
          </li>
          <li className="icon">
            <div className="mainicon" id="click" onClick={clickBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </li>
        </ul>

        <div className={`${isMenuOpen ? "" : "unique"}`}>
           <FormGroup>
            <FormControlLabel
              control={
              <ThemeSwitch 
                sx={{ m: 1 }} 
                onChange={changeBackground}
                defaultChecked={changedTheme} 
              />}
              label={theme === "light-theme" ? "Light mode" : "Dark mode"}
            />
        </FormGroup>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
