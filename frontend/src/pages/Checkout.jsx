import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    const newOrder = {
      items: cartItems,
      total: totalPrice,
      paymentMethod,
      paymentStatus: "Pending",
      date: new Date().toLocaleString(),
    };

    const oldOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([
        ...oldOrders,
        newOrder,
      ])
    );

    alert("Order Placed Successfully");

    if (paymentMethod === "ONLINE") {
      navigate("/payment");
    } else {
      navigate("/orders");
    }
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

        <h3>
          Select Payment Method
        </h3>

        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(
              e.target.value
            )
          }
        >
          <option value="COD">
            Cash On Delivery
          </option>

          <option value="ONLINE">
            Online Payment
          </option>
        </select>

        <br />
        <br />

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