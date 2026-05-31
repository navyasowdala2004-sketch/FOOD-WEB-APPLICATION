
import SearchBar from "../components/SearchBar";
import banner from "../assets/food-banner.jpg";
import FoodCard from "../components/FoodCard";

function Home() {
  return (
    <>
      const [foods, setFoods] = useState([]);

    const [searchTerm, setSearchTerm] =
    useState("");
      

      <div
        className="hero"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        }}
      >
        <div className="overlay">
          <h1>Delicious Food Delivered To You</h1>

          <SearchBar />
        </div>
      </div>
<section className="foods">
  <h2>Popular Foods</h2>

  <div className="food-container">
    <div className="food-card">
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        alt="Burger"
      />
      <h3>Cheese Burger</h3>
      <p>₹149</p>
      <button>Add To Cart</button>
    </div>

    <div className="food-card">
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        alt="Pizza"
      />
      <h3>Veg Pizza</h3>
      <p>₹249</p>
      <button>Add To Cart</button>
    </div>

    <div className="food-card">
      <img
        src="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
        alt="Biryani"
      />
      <h3>Chicken Biryani</h3>
      <p>₹299</p>
      <button>Add To Cart</button>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;