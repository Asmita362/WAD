import React, { useState } from 'react';
import './WorkoutTracker.css'; // Import the external CSS file

const WorkoutTracker = () => {
  const [workout, setWorkout] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [logs, setLogs] = useState([]);

  const handleAddWorkout = () => {
    if (workout && duration && date) {
      const newLog = {
        workout,
        duration,
        date,
        id: Date.now(),
      };

      setLogs([newLog, ...logs]);
      setWorkout('');
      setDuration('');
      setDate('');
    }
  };

  const handleDelete = (id) => {
    setLogs(logs.filter((log) => log.id !== id));
  };

  return (
    <div className="workout-tracker-container">
      <h2>🏋️ Workout Tracker</h2>

      <div className="mb-3 text-left">
        <label>Workout Name</label>
        <input
          type="text"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          placeholder="e.g. Running"
        />
      </div>

      <div className="mb-3 text-left">
        <label>Duration (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g. 30"
        />
      </div>

      <div className="mb-4 text-left">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        onClick={handleAddWorkout}
        className="add-workout-button"
      >
        Add Workout
      </button>

      {logs.length > 0 && (
        <div className="workout-log">
          <h3>Workout Log</h3>
          <ul>
            {logs.map((log) => (
              <li key={log.id}>
                <div>
                  <p className="font-semibold">{log.workout}</p>
                  <p className="text-sm text-gray-600">{log.duration} mins on {log.date}</p>
                </div>
                <button
                  onClick={() => handleDelete(log.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkoutTracker;
