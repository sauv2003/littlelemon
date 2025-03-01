function Main() {
    return (
        <main>
            <section className="hero">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Reserve a Table</button>
                <button>Order Online</button>
            </section>

            <section className="specials">
                <h2>Specials</h2>
                <div className="specials-container">
                    <article>
                        <img src="placeholder.jpg" alt="Greek Salad" />
                        <h3>Greek Salad</h3>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </article>
                    <article>
                        <img src="placeholder.jpg" alt="Bruschetta" />
                        <h3>Bruschetta</h3>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </article>
                    <article>
                        <img src="placeholder.jpg" alt="Lemon Dessert" />
                        <h3>Lemon Dessert</h3>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </article>
                </div>
            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonials-container">
                    <p>⭐⭐⭐⭐⭐ - Customer Review</p>
                    <p>⭐⭐⭐⭐ - Customer Review</p>
                    <p>⭐⭐⭐⭐⭐ - Customer Review</p>
                </div>
            </section>

            <section className="about">
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
        </main>
    );
}

export default Main;
