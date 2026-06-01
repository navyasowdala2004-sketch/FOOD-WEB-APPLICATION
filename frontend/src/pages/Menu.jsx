import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import FoodCard from "../components/FoodCard";

function Menu() {
  const { filteredFoods, searchTerm, setSearchTerm } =
    useContext(FoodContext);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Food Menu</h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search foods..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredFoods.length === 0 ? (
        <h2>No Foods Found</h2>
      ) : (
        <div className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;