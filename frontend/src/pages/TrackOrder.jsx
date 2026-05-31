import { useParams } from "react-router-dom";

function TrackOrder() {

  const { id } = useParams();

  return (
    <div>
      <h1>Track Order</h1>

      <h2>Order ID: {id}</h2>

      <h3>Status:
        Out For Delivery
      </h3>
    </div>
  );
}

export default TrackOrder;