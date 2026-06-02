import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] =
    useState("");

  const location = useLocation();

  useEffect(() => {
    fetchFoods();
  }, []);

  useEffect(() => {
    const params =
      new URLSearchParams(location.search);

    const search =
      params.get("search") || "";

    setSearchTerm(search);
  }, [location.search]);

  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        "https://online-food-app-zn4y.onrender.com/api/foods"
      );

      console.log("Foods:", res.data);

      setFoods(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFoods = foods.filter(
    (food) =>
      food.name
        ?.toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
  );

  return (
    <div className="menu-container">
      <h1 className="menu-title">
        Food Menu
      </h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : filteredFoods.length === 0 ? (
        <h2>No Foods Found</h2>
      ) : (
        <div className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food._id || food.id}
              food={food}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;