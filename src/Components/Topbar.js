import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Topbar.css';
  // Custom CSS

  const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="topbar d-flex justify-content-end align-items-center">
       
      <div className="topbar__icons d-flex">
        <i className="notification-icon">
        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/402f1d/appointment-reminders.png" alt="appointment-reminders"/>
        </i>
        <div className="profile-icon">
          <img
            src="https://img.icons8.com/material/48/402f1d/user--v1.png" // Placeholder for profile picture
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;