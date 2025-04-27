import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-page"> 
      <div className="login-card shadow-lg">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Create Your Account 📝</h2>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="fw-semibold text-dark">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-control form-control-lg custom-input"
              placeholder="John Doe"
            />
          </div>
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
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-muted">
          Already have an account?{' '}
          <Link to="/" className="text-primary fw-semibold text-decoration-none">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
