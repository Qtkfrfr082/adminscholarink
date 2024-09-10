import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Components/Bootstrap4/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Login from './Components/Login';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={
          isLoggedIn ? (
            <>
              <Topbar toggleSidebar={toggleSidebar} onLogout={handleLogout} />
              <div className="container-fluid p-0">
                <div className="row">
                  <div className={`sidebar col-12 col-md-3 p-0 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                    <Sidebar toggleSidebar={toggleSidebar} />
                  </div>
                  <div className={`col ${isSidebarOpen ? 'col-md-9' : 'col-md-12'} main-content`}>
                    {/* Main content goes here */}
                    <p>Main content goes here. You can add any components or content you want to display.</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Login onLogin={handleLogin} />
          )
        } />
      </Routes>
    </Router>
  );
};

export default App;
