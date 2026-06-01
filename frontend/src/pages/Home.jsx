import { useEffect, useState } from "react";
import { getFoods } from "../services/foodService";
import FoodCard from "../components/FoodCard";
import { useLocation } from "react-router-dom";
function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  

   console.log("Search Value:", search);
   console.log("Foods:", foods);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await getFoods();
      console.log("API DATA:", res.data);
      setFoods(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFoods = foods.filter((food) => {
  const name = food.name || "";
  const category = food.category || "";

  return (
    name.toLowerCase().includes(search.toLowerCase()) ||
    category.toLowerCase().includes(search.toLowerCase())
  );
});

  return (
    <div className="menu-container">
      <h1 className="menu-title">
        Food Menu
      </h1>

     

      {loading ? (
        <h2>Loading...</h2>
      ) : filteredFoods.length === 0 ? (
        <h2>No Foods Found</h2>
      ) : (
        <div className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food._id}
              food={food}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;