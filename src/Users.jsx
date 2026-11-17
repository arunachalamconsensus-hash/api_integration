
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, [refreshCount]);

  // Refresh button event
  const handleRefresh = () => {
    setRefreshCount((count) => count + 1);
  };

  // Loading message
  if (loading) {
    return (
      <div className="status-container">
        <div className="loader"></div>
        <h2>Loading Users...</h2>
        <p>Please wait while we fetch the data.</p>
      </div>
    );
  }

  // Error message
  if (error) {
    return (
      <div className="status-container error-container">
        <h2>Unable to Load Users</h2>
        <p>{error}</p>

        <button className="refresh-btn" onClick={handleRefresh}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="users-section">

      <div className="section-heading">
        <div>
          <h2>Our Users</h2>
          <p>All registered users and their contact information.</p>
        </div>

        <button className="refresh-btn" onClick={handleRefresh}>
          ↻ Refresh
        </button>
      </div>

      <div className="user-count">
        Total Users: <strong>{users.length}</strong>
      </div>

      <div className="users-grid">

        {users.map((user) => (
          <div className="user-card" key={user.id}>

            <div className="card-header">

              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <div className="user-heading">
                <h3>{user.name}</h3>
                <span className="username">
                  @{user.username}
                </span>
              </div>

              <span className="user-id">
                #{user.id}
              </span>

            </div>

            <div className="user-details">

              <div className="detail-item">
                <span className="detail-label">Email</span>
                <a href={`mailto:${user.email}`}>
                  {user.email}
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <a href={`tel:${user.phone}`}>
                  {user.phone}
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">Website</span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.website}
                </a>
              </div>

            </div>

            <div className="card-footer">
              <span>USER PROFILE</span>
              <span className="status-dot">Active</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Users;
