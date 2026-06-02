import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";

const popularFoods = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Delicious burger",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 2,
    name: "Veg Pizza",
    description: "Hot Pizza",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description: "Spicy Biryani",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
  },
];
<section className="offers">
  <h2>Today's Offers</h2>

  <div className="offer-card">
    🎉 Use FOOD10 and get 10% OFF
  </div>

  <div className="offer-card">
    🍕 Use FOOD20 and get 20% OFF
  </div>

  <div className="offer-card">
    🎁 First Order? Use FIRST50
  </div>
</section>
function Home() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const navigate = useNavigate();

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200')",
        }}
      >
        <div className="overlay">
          <h1>
            Delicious Food Delivered To You
          </h1>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>

      <section className="foods">
        <h2>Popular Foods</h2>

        <div className="food-container">
          {popularFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}
        </div>

        <button
          className="view-menu-btn"
          onClick={() =>
            navigate("/menu")
          }
        >
          View Full Menu
        </button>
      </section>
    </>
  );
}

export default Home;