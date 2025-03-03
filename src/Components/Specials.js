import React from 'react';
import GreekSalad from './Greek Salad.jpg';
import Bruschetta from './Bruschetta.jpg';
import LemonDessert from './Lemon Dessert.jpg';

function Specials() {
  const specialsData = [
    { id: 1, title: "Greek Salad", price: "$12.99", desc: "Fresh and healthy", image: GreekSalad },
    { id: 2, title: "Bruschetta", price: "$8.99", desc: "Delicious Italian appetizer", image: Bruschetta },
    { id: 3, title: "Lemon Dessert", price: "$5.99", desc: "Sweet and tangy delight", image: LemonDessert }
  ];

  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-container">
        {specialsData.map((item) => (
          <article key={item.id}>
            <img src={item.image} alt={item.title} height="200" width="100%" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;