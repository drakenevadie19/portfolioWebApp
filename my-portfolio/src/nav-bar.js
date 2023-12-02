//Navbar 
import { Link } from 'react-router-dom';

const Navbar = () => {
    const clickBar = () => {
        var check = document.getElementById("click");
        var header = document.getElementById("header");
        var logo = document.getElementById("logo");
        var menu = document.getElementById("menu");

        check.addEventListener("click", () => {
            if (check.checked) {
                header.style.backgroundColor = "#02153f";
                logo.style.color = "#fff";
                menu.style.color = "#fff";

            } else {
                header.style.backgroundColor = "transparent";
                logo.style.color = "#02153f";
                menu.style.color = "#02153f";
            }
        } );
    }

    return (
        <>
            <input type="checkbox" id="click" onClick={clickBar}/>
            <label for="click" class="mainicon">
                <div class="menu" id="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </label>
            <nav>
                <h2>Thanh Nguyen Do</h2>
            
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/works">Works</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                </ul>
                
            </nav>
        </>
    );
}

export default Navbar;