import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const handlePayment = () => {
    if (
      !cardNumber ||
      !expiry ||
      !cvv
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Payment Successful");

    navigate("/payment-success");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Online Payment</h2>

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) =>
            setCardNumber(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) =>
            setExpiry(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) =>
            setCvv(
              e.target.value
            )
          }
        />

        <button
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;