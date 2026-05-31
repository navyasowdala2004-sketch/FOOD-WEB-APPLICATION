import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] =
    useState({});

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (data) {
      setUser(data);
    }
  }, []);

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <h3>Name: {user.name}</h3>

      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default Profile;