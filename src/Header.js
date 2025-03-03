import logo from './Logo.svg';
import Nav from './Components/Nav.js';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Little Lemon Logo" width="150" />
            </div>
            <Nav />
        </header>
    );
}

export default Header;
