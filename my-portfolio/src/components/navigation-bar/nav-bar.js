//Navbar
// import { Link, useNavigate } from "react-router-dom";
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

  const openTheMenuTab = () => {
    setIsMenuOpen(true);
  };

  const onMenuOpen = (id) => {
    handleLinkClick(id);
    setIsMenuOpen(false);
  }

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

  // const navigate = useNavigate();

  return (
    <>
      <nav>
      {/* ${isMenuOpen ? "responsive" : ""} */}
        <ul className="topnav"> 
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
            {/* <Link to="/main/certificate" className="nav-bar-text">Certificates</Link> */}
            <a
              href="#certificates-block"
              onClick={() => handleLinkClick("certificates-block")}
              className="nav-bar-text"
            >
              Certificates
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
            <div className="mainicon" id="click" onClick={openTheMenuTab}>
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

        {isMenuOpen &&
          <div className="nav-bar-menu-opened">
            <ul className="nav-bar-menu-sidetab">
            {/* <ul> */}
              <li>
                <a
                  href="#about-block"
                  onClick={() => onMenuOpen("about-block")}
                  className="nav-bar-text-on-sidetab"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#edu-block"
                  onClick={() => onMenuOpen("edu-block")}
                  className="nav-bar-text-on-sidetab"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skill-block"
                  onClick={() => onMenuOpen("skill-block")}
                  className="nav-bar-text-on-sidetab"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#work-block"
                  onClick={() => onMenuOpen("work-block")}
                  className="nav-bar-text-on-sidetab"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#project-block"
                  onClick={() => onMenuOpen("projet-block")}
                  className="nav-bar-text-on-sidetab"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact-block"
                  onClick={() => onMenuOpen("contact-block")}
                  className="nav-bar-text-on-sidetab"
                >
                  Contact Me
                </a>
              </li>
            </ul>

            <div className="close-button-area">
              <div className="nav-bar-text-on-sidetab" onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
              </svg>
              </div>
            </div>
          </div>
        }

        <div className={`${isMenuOpen ? "" : "unique"}`}>
           <FormGroup>
            <FormControlLabel
              control={
              <ThemeSwitch 
                sx={{ m: 1 }} 
                onChange={changeBackground}
                defaultChecked={changedTheme} 
                checked={changedTheme}
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
