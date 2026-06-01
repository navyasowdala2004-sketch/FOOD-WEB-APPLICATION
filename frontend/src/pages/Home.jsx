import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import { FoodContext } from "../context/FoodContext";

function Home() {
  const {
    searchTerm,
    setSearchTerm,
    filteredFoods,
  } = useContext(FoodContext);

  // Show only 4 foods when search is empty
  const displayFoods =
    searchTerm.trim() === ""
      ? filteredFoods.slice(0, 4)
      : filteredFoods;

      console.log("Total:", filteredFoods.length);
      console.log("Display:", displayFoods.length);

  return (
    <>
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

      <section className="foods">
        <h2>Popular Foods</h2>

        <div className="food-container">
          {displayFoods.length > 0 ? (
            displayFoods.map((food) => (
              <FoodCard
                key={food._id}
                food={food}
              />
            ))
          ) : (
            <p>No matching foods found.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;