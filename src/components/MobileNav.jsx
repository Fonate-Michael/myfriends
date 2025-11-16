import { NavLink } from 'react-router-dom';
import { HiHome, HiSearch, HiBell, HiBookmark, HiUser, HiCog } from 'react-icons/hi';

function MobileNav() {
  return (
    <div className="mobile-nav">
      <NavLink to="/home" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
        <HiHome size={24} />
      </NavLink>
      <NavLink to="/search" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
        <HiSearch size={24} />
      </NavLink>
      <NavLink to="/notifications" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
        <HiBell size={24} />
      </NavLink>
      <NavLink to="/bookmarks" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
        <HiBookmark size={24} />
      </NavLink>
      <NavLink to="/profile/@me" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
        <HiUser size={24} />
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
        <HiCog size={24} />
      </NavLink>
    </div>
  );
}

export default MobileNav;
