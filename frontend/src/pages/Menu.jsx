import { useEffect, useState } from "react";


import { getFoods } from "../services/foodService";
import FoodCard from "../components/FoodCard";




function Menu() {

  const [foods, setFoods] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

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

  return (

    <div className="menu-container">

      <h1 className="menu-title">Food Menu </h1>

      {loading ? (

        <h2>Loading...</h2>

      ) : foods.length === 0 ? (

        <h2>No Foods Available</h2>

      ) : (

        <div className="food-grid">

          {foods.map((food) => (

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