import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const [discount, setDiscount] =
    useState(0);

  const [appliedCoupon, setAppliedCoupon] =
    useState("");

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const applyCoupon = (couponCode) => {
    if (appliedCoupon) {
      alert(
        "Only one coupon can be applied per order"
      );
      return;
    }

    let discountAmount = 0;

    if (couponCode === "FOOD10") {
      discountAmount = totalPrice * 0.1;
    } else if (couponCode === "FOOD20") {
      discountAmount = totalPrice * 0.2;
    } else if (couponCode === "FIRST50") {
      discountAmount = 50;
    }

    setDiscount(discountAmount);
    setAppliedCoupon(couponCode);
  };

  const removeCoupon = () => {
    setAppliedCoupon("");
    setDiscount(0);
  };

  const finalAmount =
    totalPrice - discount;

  const handlePlaceOrder = () => {
    const newOrder = {
      items: cartItems,
      total: finalAmount,
      paymentMethod,
      paymentStatus: "Pending",
      coupon: appliedCoupon,
      discount,
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

      <h3>
        Subtotal: ₹{totalPrice}
      </h3>

      <h3>Available Coupons</h3>

      <div className="coupon-list">
        <button
          onClick={() =>
            applyCoupon("FOOD10")
          }
          disabled={appliedCoupon}
        >
          FOOD10 - 10% OFF
        </button>

        <button
          onClick={() =>
            applyCoupon("FOOD20")
          }
          disabled={appliedCoupon}
        >
          FOOD20 - 20% OFF
        </button>

        <button
          onClick={() =>
            applyCoupon("FIRST50")
          }
          disabled={appliedCoupon}
        >
          FIRST50 - ₹50 OFF
        </button>
      </div>

      {appliedCoupon && (
        <>
          <h3>
            Applied Coupon:
            {appliedCoupon}
          </h3>

          <button
            onClick={removeCoupon}
          >
            Remove Coupon
          </button>
        </>
      )}

      <h3>
        Discount: ₹
        {discount.toFixed(2)}
      </h3>

      <h2>
        Final Total: ₹
        {finalAmount.toFixed(2)}
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
  );
}

export default Checkout;