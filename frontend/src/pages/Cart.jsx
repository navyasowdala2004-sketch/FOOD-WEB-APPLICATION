import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id || item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <div>
                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <div className="qty-box">
                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item._id || item.id
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item._id || item.id
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item._id || item.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed To Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;