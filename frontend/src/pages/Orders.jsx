import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    const currentUser =
      localStorage.getItem(
        "currentUser"
      );

    const allOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    const userOrders =
      allOrders.filter(
        (order) =>
          order.userEmail ===
          currentUser
      );

    setOrders(userOrders);
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
                Total: ₹{order.total}
              </p>

              <p>
                Coupon:
                {" "}
                {order.coupon ||
                  "No Coupon"}
              </p>

              <p>
                Discount:
                {" "}
                ₹{order.discount}
              </p>

              <p>
                Payment Method:
                {" "}
                {
                  order.paymentMethod
                }
              </p>

              <p>
                Payment Status:
                {" "}
                {
                  order.paymentStatus
                }
              </p>

              <p>
                Date:
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