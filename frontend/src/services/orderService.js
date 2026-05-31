import api from "./api";

export const placeOrder = (
  orderData
) => {
  return api.post(
    "/orders",
    orderData
  );
};

export const getOrders = () => {
  return api.get("/orders");
};