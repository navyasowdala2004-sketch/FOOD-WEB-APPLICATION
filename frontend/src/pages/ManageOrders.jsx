function ManageOrders() {
  return (
    <div className="admin-page">
      <h1>Manage Orders</h1>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#1001</td>
            <td>John</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManageOrders;