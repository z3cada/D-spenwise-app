import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="container">
      <div className="form">
        <h1 className="title">SpendWise</h1>
        <p className="subtitle">AI-driven personal finance insights</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <input 
              type="email" 
              className="input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>

          <div className="demo-section">
            <p className="demo-title">Demo accounts:</p>
            <p className="demo-line">Admin: admin@spendwise.com</p>
            <p className="demo-line">User: sarah@example.com</p>
            <p className="demo-note">Any password works for demo accounts</p>
          </div>

          <button type="submit" className="button">
            Sign In
          </button>

          <p className="footer">
            Don't have an account? <a href="#" className="link">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;onabort