//Navbar 
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickBar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();

    const handleClick1 = () => {
      // Navigate back to the home page ("/home")
      navigate('/main/home');
    };

    const handleClick2 = () => {
        // Navigate back to the home page ("/home")
        navigate('/');
      };
  

    return (
        <>
            <nav>
                <div class="unique">
                    <h4 onClick={handleClick1}>Thanh Nguyen Do</h4>
                    <div onClick={handleClick2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-battery-charging unique-icon" viewBox="0 0 16 16">
                            <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>
                            <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>
                            <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
                            <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646M16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
                        </svg>
                    </div>
                </div>
                
                <ul className={`topnav ${isMenuOpen ? 'responsive' : ''}`}>
                    <li>
                        <Link to="/main/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/main/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/main/works">Works</Link>
                    </li>
                    <li>
                        <Link to="/main/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/main/contact">Contact Me</Link>
                    </li>
                    <li class="icon">
                        <a class="mainicon" id="click" onClick={clickBar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;