//Navbar
import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react';
// import { ThemeContext } from '../ThemeContext';
import { ThemeContext } from "../../ThemeContext";

// import { useNavigate } from "react-router-dom";

import "./nav-bar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [changedTheme, setChangedTheme] = useState(true);

  const clickBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeBackground = () => {
    toggleTheme();
    console.log(theme);
    setChangedTheme(!changedTheme);
  }

  // const navigate = useNavigate();

  // const handleClick1 = () => {
  //   // Navigate back to the home page ("/home")
  //   navigate("/main/aboutme");
  // };

  // const handleClick2 = () => {
  //   // Navigate back to the home page ("/home")
  //   navigate("/");
  // };

  return (
    <>
      <nav>
        <ul className={`topnav ${isMenuOpen ? "responsive" : ""}`}>
          <li>
            <Link to="/main/aboutme" className="nav-bar-text">About Me</Link>
            {/* <a href="#about-block">About Me</a> */}
          </li>
          <li>
            <Link to="/main/education" className="nav-bar-text">Education</Link>
            {/* <a href="#edu-block">Education</a> */}
          </li>
          <li>
            <Link to="/main/skills" className="nav-bar-text">Skills</Link>
            {/* <a href="#skill-block">Skills</a> */}
          </li>
          <li>
            <Link to="/main/works" className="nav-bar-text">Works</Link>
            {/* <a href="#work-block">Works</a> */}
          </li>
          <li>
            <Link to="/main/projects" className="nav-bar-text">Projects</Link>
            {/* <a href="#project-block">Projects</a> */}
          </li>
          <li>
            <Link to="/main/contact" className="nav-bar-text">Contact Me</Link>
            {/* <a href="#contact-block">Contact Me</a> */}
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
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </li>
        </ul>

        <div className={`${isMenuOpen ? "" : "unique"}`}>
          {/* <h4 onClick={handleClick1}>Thanh Nguyen Do</h4> */}
          {/* <div onClick={handleClick2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-battery-charging unique-icon" viewBox="0 0 16 16">
                            <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>
                            <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>
                            <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
                            <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646M16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
                        </svg>
                    </div> */}
          <input
            type="checkbox" 
            onChange={changeBackground}
            checked={changedTheme}
            // data-toggle="toggle" 
            data-onstyle="info"
            data-onlabel='
            Light Mode <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
            </svg>'
            data-offlabel='
            Dark Mode <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
            </svg>'
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
