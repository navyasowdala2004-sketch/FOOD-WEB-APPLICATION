function SearchBar({
  searchTerm = "",
  setSearchTerm = () => {},
}) {
  const handleChange = (e) => {
    if (typeof setSearchTerm === "function") {
      setSearchTerm(e.target.value);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search food items..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;