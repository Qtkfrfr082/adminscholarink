import React from 'react';
import { useHistory } from 'react-router-dom';

const ProfileDropdown = ({ onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session or token)
    onLogout(); // Call the onLogout function passed from App
    history.push('/login'); // Redirect to the login page
  };

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://img.icons8.com/material-rounded/32/402f1d/user.png" alt="profile" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="profileDropdown">
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;