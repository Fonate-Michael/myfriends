import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiHome, HiSearch, HiBell, HiBookmark, HiUser, HiCog, HiDotsHorizontal } from 'react-icons/hi';

function Sidebar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <div className="sidebar">
      <div className="logo">myfriends</div>
      <nav>
        <NavLink to="/home" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HiHome size={26} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HiSearch size={26} />
          <span>Search</span>
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HiBell size={26} />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/bookmarks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HiBookmark size={26} />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/profile/@me" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HiUser size={26} />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HiCog size={26} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-user" ref={menuRef}>
        <div className="sidebar-user-info" onClick={() => setShowUserMenu(!showUserMenu)}>
          <img src="https://i.pravatar.cc/150?img=1" alt="You" className="sidebar-user-avatar" />
          <div className="sidebar-user-details">
            <div className="sidebar-user-name">Your Name</div>
            <div className="sidebar-user-username">@yourname</div>
          </div>
          <HiDotsHorizontal size={20} className="sidebar-user-menu-icon" />
        </div>
        
        {showUserMenu && (
          <div className="sidebar-user-menu">
            <div className="sidebar-user-menu-item" onClick={handleLogout}>
              Log out @yourname
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
