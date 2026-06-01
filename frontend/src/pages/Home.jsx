import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";

const popularFoods = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy patty with melted cheese and fresh toppings.",
    price: 149,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    name: "Veg Pizza",
    description: "Crispy crust with fresh veggies and rich sauce.",
    price: 249,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description: "Aromatic rice layered with tender chicken and spices.",
    price: 299,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
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
      <div
        className="hero"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
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
      <section className="foods">
        <p>Searching for: {searchTerm}</p>
        <h2>Popular Foods</h2>

        <div className="food-container">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))
          ) : (
            <p className="no-results">No matching foods found.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;