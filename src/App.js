import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import CreateHospital from "./components/createHospital/createHospital.js";
import ViewHospital from "./components/viewHospital/viewHospital.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-hospital" element={<CreateHospital />} />
        <Route path="/view-hospitals" element={<ViewHospital />} />
      </Routes>
    </Router>
  );
}

export default App;
