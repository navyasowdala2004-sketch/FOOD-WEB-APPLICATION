import { useNavigate } from "react-router-dom";

function SearchBar({
  searchTerm = "",
  setSearchTerm = () => {},
}) {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/menu?search=${searchTerm}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search food items..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="search-input"
      />

      <button
        onClick={handleSearch}
        className="search-btn"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;