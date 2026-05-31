import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <div className="orders-container">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h2>No Orders Found</h2>
      ) : (
        orders.map(
          (order, index) => (
            <div
              key={index}
              className="order-card"
            >
              <h3>
                Order #{index + 1}
              </h3>

              <p>
                Total: ₹
                {order.total}
              </p>

              <p>
                Payment Method:
                {" "}
                {order.paymentMethod}
              </p>

              <p>
                Payment Status:
                {" "}
                {order.paymentStatus}
              </p>

              <p>
                Order Date:
                {" "}
                {order.date}
              </p>

              <p>
                Status:
                Delivered
              </p>
            </div>
          )
        )
      )}
    </div>
  );
}

export default Orders;