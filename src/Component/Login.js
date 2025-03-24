import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import jobImage from '../jobimage.jpg';

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "", dob: "", email: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Enter Key Press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      isNewUser ? handleSignUp() : handleLogin();
    }
  };

  // Handle Login
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      alert("Login successful!");
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid username or password");
    }
  };

  // Handle Sign-Up
  const handleSignUp = () => {
    if (!formData.username || !formData.password || !formData.dob || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.username === formData.username)) {
      alert("Username already exists! Try a different one.");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully!");
    setIsNewUser(false);
  };

  return (
    <div className="login-container">
      <h2>Welcome to KodeJob</h2>
      <div className="login-box">
        <div className="login-image">
          <img src={jobImage} alt="Job Search" />
        </div>
        <div className="login-form">
          <h3>{isNewUser ? "Sign Up" : "Login"}</h3>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={formData.username} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
          />
          
          {!isNewUser ? (
            <>
              <button onClick={handleLogin}>Login</button>
              <p>New user? <button onClick={() => setIsNewUser(true)}>Sign Up</button></p>
            </>
          ) : (
            <>
              <input 
                type="date" 
                name="dob" 
                value={formData.dob} 
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown} 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown} 
              />
              <button onClick={handleSignUp}>Sign Up</button>
              <p>Already have an account? <button onClick={() => setIsNewUser(false)}>Login</button></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
