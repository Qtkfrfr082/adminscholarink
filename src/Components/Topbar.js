import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topbar.css';
import { Dropdown } from 'react-bootstrap'; // Import Dropdown from react-bootstrap

const Topbar = ({ toggleSidebar, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="topbar d-flex justify-content-end align-items-center">
      <div className="topbar__icons d-flex">
        <i className="notification-icon">
          <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/402f1d/appointment-reminders.png" alt="appointment-reminders"/>
        </i>
        <Dropdown>
          <Dropdown.Toggle variant="link" id="profile-dropdown" className="profile-icon">
            <img
              src="https://img.icons8.com/material/48/402f1d/user--v1.png" // Placeholder for profile picture
              alt="Profile"
              className="profile-img"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Topbar;
