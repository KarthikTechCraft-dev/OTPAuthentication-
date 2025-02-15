import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };


  const handleLogin = () => {
    if (validateEmail(email)) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      alert(`📩 Your OTP is: ${otp}`); // Display OTP as an alert
      localStorage.setItem("otp", otp);
      navigate("/otp");
    } else {
      alert("❌ Enter a valid email (e.g., user@example.com)");
    }
  };

  return (
    <div className="container">
      <h2>🔑 Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Get OTP</button>
    </div>
  );
};

export default Login;

