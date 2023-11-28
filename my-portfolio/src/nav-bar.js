//Navbar 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
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
    );
}

export default Navbar;