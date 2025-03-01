import logo from './Logo.svg';
import Nav from './Nav';

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
