import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      alert("OTP expired! Please request a new one.");
      navigate("/");
    }

    return () => clearInterval(countdown);
  }, [timer, navigate]);

  const verifyOtp = () => {
    const storedOtp = localStorage.getItem("otp");
    if (otp === storedOtp) {
      alert("✅ OTP verified successfully!");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid OTP. Try again!");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h2>Enter OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify</button>
      <p>⏳ OTP expires in {timer} seconds</p>
    </div>
  );
};

export default OTPVerification;
