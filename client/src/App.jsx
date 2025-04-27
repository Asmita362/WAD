import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./modules/Login";
import Signup from "./modules/Signup";
import Homepage from "./pages/Homepage";
import StartTrackingButton from "./components/StartTrackingButton";
import WaterTracker from "./components/WaterTracker";
import SleepTracker from "./components/SleepTracker";
import WorkoutTracker from "./components/WorkoutTracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/starttracking" element={<StartTrackingButton />} />
        <Route path="/watertracker" element={<WaterTracker />} />
        <Route path="/sleeptracker" element={<SleepTracker />} />
        <Route path="/workouttracker" element={<WorkoutTracker />} />


      </Routes>
    </Router>
  );
}

export default App;
