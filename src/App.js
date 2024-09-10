import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid p-0">
      <Topbar  /> {/* Pass the toggle function */}
      
      <div className="row">
        <div className={`sidebar col-12 col-md-3 p-0 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Sidebar toggleSidebar={toggleSidebar}/>
        </div>
        <div className={`col ${isSidebarOpen ? 'col-md-9' : 'col-md-12'} main-content`}>
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default App;
