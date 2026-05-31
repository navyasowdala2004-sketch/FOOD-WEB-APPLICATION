import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    navigate("/orders");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-summary">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="checkout-item"
          >
            <h3>{item.name}</h3>

            <p>
              Qty: {item.quantity}
            </p>

            <p>
              ₹
              {item.price *
                item.quantity}
            </p>
          </div>
        ))}

        <h2>
          Total: ₹{totalPrice}
        </h2>

        <button
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;