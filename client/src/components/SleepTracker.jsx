import React, { useState } from 'react';
import './SleepTracker.css'; // Import the external CSS file

const SleepTracker = () => {
  const [sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');
  const [hoursSlept, setHoursSlept] = useState(null);

  const calculateSleep = () => {
    if (sleepTime && wakeTime) {
      const sleep = new Date(`1970-01-01T${sleepTime}:00`);
      let wake = new Date(`1970-01-01T${wakeTime}:00`);

      // If wake time is earlier than sleep time, assume it's the next day
      if (wake <= sleep) {
        wake.setDate(wake.getDate() + 1);
      }

      const diff = (wake - sleep) / (1000 * 60 * 60); // Convert ms to hours
      setHoursSlept(diff.toFixed(1));
    }
  };

  const reset = () => {
    setSleepTime('');
    setWakeTime('');
    setHoursSlept(null);
  };

  return (
    <div className="sleep-tracker-container">
      <h2>😴 Sleep Tracker</h2>

      <div className="mb-4">
        <label>Sleep Time:</label>
        <input
          type="time"
          value={sleepTime}
          onChange={(e) => setSleepTime(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label>Wake Time:</label>
        <input
          type="time"
          value={wakeTime}
          onChange={(e) => setWakeTime(e.target.value)}
        />
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={calculateSleep}
          className="action-button calculate-button"
        >
          Calculate
        </button>
        <button
          onClick={reset}
          className="action-button reset-button"
        >
          Reset
        </button>
      </div>

      {hoursSlept !== null && (
        <div className="result">
          You slept for <span>{hoursSlept}</span> hours.
        </div>
      )}
    </div>
  );
};

export default SleepTracker;
