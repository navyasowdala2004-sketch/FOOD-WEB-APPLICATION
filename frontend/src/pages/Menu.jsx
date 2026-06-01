import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFoods } from "../services/foodService";
import FoodCard from "../components/FoodCard";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // Search value coming from Home page
  const searchParams = new URLSearchParams(
    location.search
  );

  const initialSearch =
    searchParams.get("search") || "";

  // Search box on Menu page
  const [search, setSearch] =
    useState(initialSearch);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await getFoods();

      setFoods(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFoods = foods.filter(
    (food) => {
      const name = food.name || "";
      const category =
        food.category || "";

      return (
        name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        category
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    }
  );

  return (
    <div className="menu-container">
      <h1 className="menu-title">
        Food Menu
      </h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search foods..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />
      </div>

      {loading ? (
        <h2>Loading...</h2>
      ) : filteredFoods.length ===
        0 ? (
        <h2>No Foods Found</h2>
      ) : (
        <div className="food-grid">
          {filteredFoods.map(
            (food) => (
              <FoodCard
                key={food._id}
                food={food}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;