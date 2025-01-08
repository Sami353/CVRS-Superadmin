import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Hardcoded credentials for demo purposes
  const superAdminCredentials = {
    username: "superadmin",
    password: "admin123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === superAdminCredentials.username &&
      password === superAdminCredentials.password
    ) {
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Superadmin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
