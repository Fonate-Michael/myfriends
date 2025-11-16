import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="top-bar-with-back">
          <IoMdArrowBack size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
          <div className="top-bar-title">Settings</div>
        </div>
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <h3 className="settings-section-title">Appearance</h3>
          <div className="settings-item">
            <div className="settings-item-info">
              <div className="settings-item-label">Theme</div>
              <div className="settings-item-desc">Dark mode with green accent</div>
            </div>
            <div className="settings-toggle">
              <div className="toggle-option active">Dark</div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">Account</h3>
          <div className="settings-item clickable">
            <div className="settings-item-info">
              <div className="settings-item-label">Email</div>
              <div className="settings-item-desc">user@example.com</div>
            </div>
          </div>
          <div className="settings-item clickable">
            <div className="settings-item-info">
              <div className="settings-item-label">Password</div>
              <div className="settings-item-desc">Change your password</div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">Privacy</h3>
          <div className="settings-item clickable">
            <div className="settings-item-info">
              <div className="settings-item-label">Blocked accounts</div>
              <div className="settings-item-desc">Manage blocked users</div>
            </div>
          </div>
          <div className="settings-item clickable">
            <div className="settings-item-info">
              <div className="settings-item-label">Muted accounts</div>
              <div className="settings-item-desc">Manage muted users</div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <button className="btn-logout" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
