import React, { useState } from 'react';
import './WaterTracker.css'; // Import the external CSS file

const WaterTracker = () => {
  const [goal, setGoal] = useState(8); // Default daily goal: 8 glasses
  const [consumed, setConsumed] = useState(0); // Glasses consumed

  const handleAddGlass = () => {
    if (consumed < goal) {
      setConsumed(consumed + 1);
    }
  };

  const handleReset = () => {
    setConsumed(0);
  };

  return (
    <div className="water-tracker-container">
      <h2>💧 Water Tracker</h2>
      <p>
        Daily Goal: <strong>{goal} glasses</strong>
      </p>
      <p>
        You’ve had <strong>{consumed}</strong> {consumed === 1 ? 'glass' : 'glasses'} today.
      </p>

      <div className="button-container">
        <button
          onClick={handleAddGlass}
          className="add-glass-button"
          disabled={consumed >= goal}
        >
          + Add Glass
        </button>
        <button
          onClick={handleReset}
          className="reset-button"
        >
          Reset
        </button>
      </div>

      <div className="mt-6">
        <progress value={consumed} max={goal}></progress>
        <p className="progress-text">
          {((consumed / goal) * 100).toFixed(0)}% of goal
        </p>
      </div>
    </div>
  );
};

export default WaterTracker;
