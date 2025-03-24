import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* 404 Handling - Redirects unknown routes to Login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
