import React from "react";

const menuItems = {
  Veg: [
    "Paneer Butter Masala",
    "Dal Makhani",
    "Chole Bhature",
    "Aloo Paratha",
    "Vegetable Pulao",
    "Palak Paneer",
    "Rajma Chawal",
    "Baingan Bharta",
    "Mushroom Masala",
    "Mix Veg Curry",
  ],
  NonVeg: [
    "Chicken Biryani",
    "Mutton Rogan Josh",
    "Butter Chicken",
    "Fish Curry",
    "Egg Curry",
    "Chicken Tikka Masala",
    "Prawn Masala",
    "Mutton Korma",
    "Tandoori Chicken",
    "Keema Paratha",
  ],
  Salads: [
    "Greek Salad",
    "Caesar Salad",
    "Kachumber Salad",
    "Russian Salad",
    "Corn & Avocado Salad",
    "Pasta Salad",
    "Sprouts Salad",
    "Fruit Salad",
    "Caprese Salad",
    "Garden Fresh Salad",
  ],
  Desserts: [
    "Gulab Jamun",
    "Rasmalai",
    "Jalebi",
    "Chocolate Brownie",
    "Cheesecake",
    "Tiramisu",
    "Ice Cream Sundae",
    "Carrot Halwa",
    "Shahi Tukda",
    "Fruit Custard",
  ],
  Snacks: [
    "Samosa",
    "Pakora",
    "Vada Pav",
    "French Fries",
    "Dahi Puri",
    "Bhel Puri",
    "Spring Rolls",
    "Nachos with Cheese",
    "Popcorn Chicken",
    "Paneer Tikka",
  ],
  Drinks: [
    "Mango Lassi",
    "Masala Chai",
    "Cold Coffee",
    "Lemonade",
    "Mocktail Mojito",
    "Fruit Punch",
    "Pineapple Juice",
    "Strawberry Shake",
    "Green Tea",
    "Coconut Water",
  ],
  Specials: [
    "Chef’s Special Pasta",
    "Royal Thali",
    "Exotic Sushi Platter",
    "Tandoori Platter",
    "Barbecue Feast",
    "Mexican Fiesta",
    "Seafood Extravaganza",
    "Biryani Special",
    "Fusion Dessert Platter",
    "Gourmet Sandwich",
  ],
};

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-categories">
        {Object.keys(menuItems).map((category) => (
            <div key={category} className="menu-category">
            <h2>{category}</h2>
            <ul className="menu-list">
                {menuItems[category].map((dish, index) => (
                <li key={index}>{dish}</li>
                ))}
            </ul>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
