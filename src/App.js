import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateHospital from "./components/createHospital/createHospital.js";
import ViewHospital from "./components/viewHospital/viewHospital.js";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register.js"
import './scss/style.scss'
import adminLogin from "./components/Admin/adminLogin.js";
import DefaultLayout from "./layout/DefaultLayout.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/register" name="Register Page" element={<Register />} />
        <Route exact path="/admin" name="Admin Login Page" element={<adminLogin />} />
        <Route path="/create-hospital" element={<CreateHospital />} />
        <Route path="/view-hospitals" element={<ViewHospital />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}

export default App;

