
import { useCart } from "../context/CartContext";

function FoodCard({ food, className = "" }) {
  const { addToCart } = useCart();

  const isMenuCard = className.includes("menu-food-card");

  return (
    <div className={`food-card ${className}`}>
      <div className={isMenuCard ? "menu-food-image-wrapper" : ""}>
        <img
          src={food.image || food.imageUrl}
          alt={food.name}
          className="food-image"
        />
      </div>

      <div className="food-info">
        <h3>{food.name}</h3>
        <p>{food.description}</p>
        <h4>₹{food.price}</h4>

        <button onClick={() => addToCart(food)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
