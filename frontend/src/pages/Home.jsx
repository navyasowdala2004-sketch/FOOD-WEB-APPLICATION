import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";

const popularFoods = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy patty with melted cheese and fresh toppings.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    name: "Veg Pizza",
    description:
      "Crispy crust with fresh veggies and rich sauce.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description:
      "Aromatic rice layered with tender chicken and spices.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
  },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = popularFoods.filter((food) => {
    const search = searchTerm.toLowerCase();

    return (
      food.name.toLowerCase().includes(search) ||
      food.description.toLowerCase().includes(search)
    );
  });

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        }}
      >
        <div className="overlay">
          <h1>Delicious Food Delivered To You</h1>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          🚚
          <h3>Free Delivery</h3>
          <p>Fast doorstep delivery</p>
        </div>

        <div className="feature">
          ⏱️
          <h3>30 Min Delivery</h3>
          <p>Quick service guaranteed</p>
        </div>

        <div className="feature">
          🍽️
          <h3>Fresh Food</h3>
          <p>Made with quality ingredients</p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section">
        <h2>🔥 Signature Dishes & Special Offers</h2>

        <div className="offers-container">
          <div className="offer-card">
            <h3>🍔 Burger Combo</h3>
            <p>Get 20% OFF on all Burgers</p>
          </div>

          <div className="offer-card">
            <h3>🍕 Pizza Festival</h3>
            <p>Buy 1 Get 1 Free Every Friday</p>
          </div>

          <div className="offer-card">
            <h3>🍗 Biryani Special</h3>
            <p>Flat ₹50 OFF on Orders Above ₹299</p>
          </div>

          <div className="offer-card">
            <h3>🚚 Free Delivery</h3>
            <p>On Orders Above ₹499</p>
          </div>
        </div>
      </section>

      {/* Popular Foods */}
      <section className="foods">
        <h2>Popular Foods</h2>

        <p>
          <strong>Searching For:</strong>{" "}
          {searchTerm || "All Foods"}
        </p>

        <div className="food-container">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
              />
            ))
          ) : (
            <p className="no-results">
              No matching foods found.
            </p>
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews">
        <h2>Customer Reviews</h2>

        <div className="review-container">
          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Amazing food and fast
              delivery.
            </p>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Best burgers and pizzas in
              town.
            </p>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Great experience every
              time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;