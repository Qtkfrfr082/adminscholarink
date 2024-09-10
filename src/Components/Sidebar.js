import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="sidebar d-flex flex-column align-items-center p-3 bg-light vh-100">
       <button onClick={toggleSidebar} className="btn menu-btn">
        <img width="24" height="24" src="https://img.icons8.com/material-rounded/32/402f1d/menu--v1.png" alt="menu--v1" />
      </button>
      <div className="sidebar__header mb-4">
        <div className="logo text-center">
          <img src='./Logo.png' alt="Scholarink Logo" className="logo-image img-fluid" class="Logo" />
          <h4 className="mt-2">Scholarink</h4>
          <p className="small-text">(Admin Web Manager)</p>
        </div>
      </div>

      <ul className="nav flex-column w-100">
  <li className="nav-item mb-2">
    <a href="#" className="nav-link text-dark d-flex align-items-center">
      <i className="icon-spacing"> <img src="https://img.icons8.com/material/32/402f1d/dashboard-layout.png" alt="dashboard-layout"/></i> 
      <span className="menu-text">Dashboard</span>
    </a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link text-dark d-flex align-items-center">
      <i className="fas fa-users icon-spacing"><img src="https://img.icons8.com/material-rounded/32/402f1d/user.png" alt="user"/> </i> 
      <span className="menu-text">Users</span>
    </a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link text-dark d-flex align-items-center">
      <i className="fas fa-book icon-spacing"><img src="https://img.icons8.com/material/32/402f1d/book--v3.png" alt="book--v3"/> </i> 
      <span className="menu-text">Book Manager</span>
    </a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link text-dark d-flex align-items-center">
      <i className="fas fa-chart-bar icon-spacing"><img src="https://img.icons8.com/material-rounded/32/402f1d/graph-report.png" alt="graph-report"/></i> 
      <span className="menu-text">Reports</span>
    </a>
  </li>
</ul>
    </div>
  );
};

export default Sidebar;