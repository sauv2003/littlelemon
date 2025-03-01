function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <h3>Important New Options</h3>
                <ul>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>

            <div className="footer-section">
                <h3>Social Media Links</h3>
                <p>Follow us on social media!</p>
            </div>
        </footer>
    );
}

export default Footer;
