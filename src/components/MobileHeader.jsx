import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MobileHeader() {
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
    <div className="mobile-header">
      <div className="mobile-logo">myfriends</div>
      <div className="mobile-header-user" ref={menuRef}>
        <img 
          src="https://i.pravatar.cc/150?img=1" 
          alt="You" 
          className="mobile-header-avatar"
          onClick={() => setShowUserMenu(!showUserMenu)}
        />
        {showUserMenu && (
          <div className="mobile-user-menu">
            <div className="mobile-user-menu-header">
              <img src="https://i.pravatar.cc/150?img=1" alt="You" className="mobile-user-menu-avatar" />
              <div className="mobile-user-menu-info">
                <div className="mobile-user-menu-name">Your Name</div>
                <div className="mobile-user-menu-username">@yourname</div>
              </div>
            </div>
            <div className="mobile-user-menu-item" onClick={handleLogout}>
              Log out @yourname
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileHeader;
