import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}

export default App;

