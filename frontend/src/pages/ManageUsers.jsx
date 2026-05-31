function ManageUsers() {
  return (
    <div className="admin-page">
      <h1>Manage Users</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>
            <td>john@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;