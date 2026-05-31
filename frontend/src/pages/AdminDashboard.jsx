import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>

        <Link to="/admin/add-food">
          Add Food
        </Link>

        <Link to="/admin/orders">
          Manage Orders
        </Link>

        <Link to="/admin/users">
          Manage Users
        </Link>
      </div>

      <div className="admin-content">
        <h1>Dashboard</h1>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h2>120</h2>
            <p>Total Orders</p>
          </div>

          <div className="dashboard-card">
            <h2>50</h2>
            <p>Total Foods</p>
          </div>

          <div className="dashboard-card">
            <h2>25</h2>
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;