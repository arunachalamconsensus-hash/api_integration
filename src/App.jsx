
// eslint-disable-next-line no-unused-vars
import React from "react";
import Users from "./Users";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>User Directory</h1>
          <p>
            Explore user information fetched from an external API
          </p>
        </div>
      </header>

      <main className="main-content">
        <Users />
      </main>

      <footer className="footer">
        <p>React Task 7 | API Integration using useEffect</p>
      </footer>
    </div>
  );
}

export default App;
