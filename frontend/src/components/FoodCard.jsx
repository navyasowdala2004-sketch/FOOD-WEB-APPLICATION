import { useCart } from "../context/CartContext";

function FoodCard({ food }) {

  const { addToCart } = useCart();

  return (
    <div className="food-card">

      <img
        src={food.image}
        alt={food.name}
        className="food-image"
      />

      <div className="food-info">

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <h4>₹{food.price}</h4>

        
        <button
          onClick={() => {
  console.log("Food Added:", food);
  addToCart(food);
}}
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default FoodCard;