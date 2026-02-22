import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="container">
      <div className="login-card">
        <h1 className="brand">SpendWise</h1>
        <p className="tagline">AI-driven personal finance insights</p>

        <div className="field">
          <label className="label">Email</label>
          <input 
            type="email" 
            className="input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Password</label>
          <input 
            type="password" 
            className="input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="demo-box">
          <p className="demo-heading">Demo accounts:</p>
          <p className="demo-line">Admin: admin@spendwise.com</p>
          <p className="demo-line">User: sarah@example.com</p>
          <p className="demo-note">Any password works for demo accounts</p>
        </div>

        <button type="submit" className="signin-button" onClick={handleSubmit}>
          Sign In
        </button>

        <p className="signup-prompt">
          Don't have an account? <a href="#" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;