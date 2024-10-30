import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           
          <nav>
            <span>My Website</span>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
            a<Link to="/contact">Contact</Link>
            <a href="/contact">Contact Us</a>
            </nav> 
        </div>
    );
};

export default Header;