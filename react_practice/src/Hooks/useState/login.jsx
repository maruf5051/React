import "./index.css";
import { useState } from "react";

// Login Form Component
export const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // Handle input changes
  const handleLogInFormChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Handle form submission
  const handleLogInForm = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(user.username);
    console.log(user.password);
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <div className="card">
        <form onSubmit={handleLogInForm}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleLogInFormChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleLogInFormChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
