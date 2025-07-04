import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../services/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isAuthenticated()) return null;

  return (
    <nav className="text-white bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="text-xl font-bold text-green-400">AI CCTV</div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div className="items-center hidden gap-4 md:flex">
          <NavLinks />
          <LogoutButton onLogout={handleLogout} />
        </div>
      </div>

      {menuOpen && (
        <div className="px-4 pb-4 md:hidden">
          <NavLinks />
          <LogoutButton onLogout={handleLogout} />
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <div className="flex flex-col gap-4 md:flex-row">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/live">Live Feed</Link>
    <Link to="/alerts">Alerts</Link>
    <Link to="/complaint">Complaint</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/alert-logs">Logs</Link>
    <Link to="/export">Export</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/notifications">Notifications</Link>
    <Link to="/history">Tracking</Link>
    <Link to="/settings">Settings</Link>
    <Link to="/help">Help</Link>
  </div>
);

const LogoutButton = ({ onLogout }) => (
  <div className="flex items-center gap-3 mt-3 md:mt-0">
    <span className="text-sm text-gray-400">
      Role: <span className="text-green-300">Admin</span>
    </span>
    <button
      onClick={onLogout}
      className="px-3 py-1 text-sm font-semibold bg-red-500 rounded hover:bg-red-600"
    >
      Logout
    </button>
  </div>
);

export default Navbar;