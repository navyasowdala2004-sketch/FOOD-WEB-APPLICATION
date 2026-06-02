import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="profile-container">
        <h2>No User Logged In</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <div className="profile-card">
        <h3>Name: {user.name}</h3>

        <h3>Email: {user.email}</h3>

        <h3>User ID: {user.id}</h3>
      </div>
    </div>
  );
}

export default Profile;