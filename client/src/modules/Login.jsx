import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // custom styles


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);  
        localStorage.setItem('email', form.email);  // <-- save email here
        navigate('/homepage');
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card shadow-lg">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Welcome Back 👋</h2>
         
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="fw-semibold text-dark">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-control form-control-lg custom-input"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group mb-4">
            <label className="fw-semibold text-dark">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="form-control form-control-lg custom-input"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="text-primary fw-semibold text-decoration-none">
            Log In
          </button>
        </form>

        <p className="text-center mt-4 text-muted">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-primary fw-semibold text-decoration-none">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;