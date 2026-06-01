import { createContext, useEffect, useState } from "react";
import axios from "axios";

// create context
export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // fetch foods once
  const fetchFoods = async () => {
    try {
      const res = await axios.get("https://online-food-app-zn4y.onrender.com/api/foods");
      setFoods(res.data);
    } catch (error) {
      console.log("Food fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // filtered foods (GLOBAL SEARCH)
  const filteredFoods = foods.filter((food) => {
    const search = searchTerm.toLowerCase();
    return (
      food.name.toLowerCase().includes(search) ||
      food.description.toLowerCase().includes(search)
    );
  });

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        loading,
        searchTerm,
        setSearchTerm,
        filteredFoods,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};