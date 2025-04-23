import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartTrackingButton.css'; // Import the external CSS file

const StartTrackingButton = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="start-tracking-container">
      <div className="container py-5">
        <h1 className="fw-bold text-primary mb-4">Start Tracking Today 📊</h1>
        <p className="lead text-muted mb-5">
          Build positive habits and stay consistent. Your healthy lifestyle starts here!
        </p>

        <div className="card-columns">
          {/* Track Water Intake */}
          <div className="card">
            <div className="fs-1 mb-3">💧</div>
            <h4 className="fw-bold text-primary">Track Water Intake</h4>
            <p className="text-muted">Set daily goals and never forget to hydrate.</p>
            <button
              onClick={() => handleNavigate('/watertracker')}
              className="btn btn-outline-primary mt-3"
            >
              Start Now
            </button>
          </div>

          {/* Monitor Sleep */}
          <div className="card">
            <div className="fs-1 mb-3">😴</div>
            <h4 className="fw-bold text-primary">Monitor Sleep</h4>
            <p className="text-muted">Log your rest and see how it affects your mood.</p>
            <button
              onClick={() => handleNavigate('/sleeptracker')}
              className="btn btn-outline-primary mt-3"
            >
              Start Now
            </button>
          </div>

          {/* Log Workouts */}
          <div className="card">
            <div className="fs-1 mb-3">🏋️</div>
            <h4 className="fw-bold text-primary">Log Workouts</h4>
            <p className="text-muted">Track your workouts and push your limits every day.</p>
            <button
              onClick={() => handleNavigate('/workouttracker')}
              className="btn btn-outline-primary mt-3"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartTrackingButton;
