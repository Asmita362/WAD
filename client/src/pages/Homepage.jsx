
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (!storedEmail) {
      navigate('/login');
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <div className="homepage">
{/*     
      <header className="homepage-header">
  <h1 className="logo">HabbitTrack</h1>

  <div className="user-actions">
    <span className="user-greeting">Hi, {email}</span>
    <button onClick={handleLogout} className="logout-button">
      Log Out
    </button>
  </div>
</header> */}
<header className="homepage-header">
  <h1 className="logo">HabbitTrack</h1>

  <div className="user-actions">
    <span className="user-greeting">Hi, {email}</span>
    <button onClick={handleLogout} className="logout-button">
      Log Out
    </button>
  </div>
</header>

     
      <section className="hero">
        <div className="hero-text">
          <h2 className="hero-title">
            Track your health, <br /> one habit at a time.
          </h2>
          <p className="hero-description">
            Stay on top of your water intake, sleep, mood, workouts, and more—all in one simple dashboard.
          </p>
          <a href="/starttracking" className="cta-button">
            Start Tracking Today
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/e9bb20180149345.Y3JvcCwyNzg5LDIxODIsMCww.png"
            alt="Health Illustration"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">💧</div>
          <h3 className="feature-title">Track Water Intake</h3>
          <p className="feature-text">Set daily goals and never forget to hydrate.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">😴</div>
          <h3 className="feature-title">Monitor Sleep</h3>
          <p className="feature-text">Log your rest and see how it affects your mood.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🏋️</div>
          <h3 className="feature-title">Log Workouts</h3>
          <p className="feature-text">Track your progress and stay motivated.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        &copy; {new Date().getFullYear()} HealthTrack. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
