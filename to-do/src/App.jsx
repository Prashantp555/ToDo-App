// filepath: c:\Users\prash\Projects\Test App\to-do\src\App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;