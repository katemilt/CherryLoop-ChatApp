import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './sections/Login.jsx';
import SignUp from './sections/SignUp.jsx';
import Dashboard from './sections/Dashboard.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root path to login */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </Router>
    </main>
  );
};

export default App;

