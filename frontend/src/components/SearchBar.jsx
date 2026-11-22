
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFoods } from "../services/foodService";

function SearchBar({
  searchTerm = "",
  setSearchTerm = () => {},
}) {
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getFoods();
        const data = response.data;

        setFoods(
          Array.isArray(data) ? data : data.foods || []
        );
      } catch (error) {
        console.error("Food fetching error:", error);
      }
    };

    fetchFoods();
  }, []);

  const filteredFoods = foods.filter((food) =>
    food.name?.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const handleSearch = (value = searchTerm) => {
    if (!value.trim()) return;

    setShowSuggestions(false);

    navigate(`/menu?search=${encodeURIComponent(value.trim())}`);
  };

  const handleSuggestionClick = (food) => {
    setSearchTerm(food.name);
    handleSearch(food.name);
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search food items..."
          value={searchTerm}
          className="search-input"
          onFocus={() => setShowSuggestions(true)}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
            if (e.key === "Escape") setShowSuggestions(false);
          }}
        />

        <button
          className="search-btn"
          onClick={() => handleSearch()}
        >
          🔍
        </button>
      </div>

      {showSuggestions && searchTerm.trim() !== "" && (
        <div className="search-suggestions">
          {filteredFoods.length > 0 ? (
            filteredFoods.slice(0, 10).map((food) => (
              <div
                className="search-suggestion-item"
                key={food._id || food.id || food.name}
                onMouseDown={() => handleSuggestionClick(food)}
              >
                {food.image || food.imageUrl ? (
                  <img
                    src={food.image || food.imageUrl}
                    alt=""
                  />
                ) : (
                  <span className="suggestion-search-icon">🔍</span>
                )}

                <span className="suggestion-name">
                  {food.name}
                </span>
              </div>
            ))
          ) : (
            <div className="search-message">
              No foods found
            </div>
          )}

          {filteredFoods.length > 0 && (
            <div
              className="see-all-results"
              onMouseDown={() => handleSearch()}
            >
              See all results for "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
