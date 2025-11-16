import { useState } from 'react';
import { HiSearch, HiUserAdd, HiDotsVertical } from 'react-icons/hi';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      role: 'admin',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=3',
      joinedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'jane@example.com',
      role: 'user',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=5',
      joinedDate: '2024-02-20'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      username: 'alexj',
      email: 'alex@example.com',
      role: 'user',
      status: 'blocked',
      avatar: 'https://i.pravatar.cc/150?img=12',
      joinedDate: '2024-03-10'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      username: 'sarahw',
      email: 'sarah@example.com',
      role: 'user',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=9',
      joinedDate: '2024-04-05'
    },
    {
      id: 5,
      name: 'Mike Chen',
      username: 'mikechen',
      email: 'mike@example.com',
      role: 'moderator',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=15',
      joinedDate: '2024-05-12'
    }
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    ));
    setShowUserMenu(null);
  };

  const handleBlockUser = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: user.status === 'blocked' ? 'active' : 'blocked' } : user
    ));
    setShowUserMenu(null);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
      setShowUserMenu(null);
    }
  };

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    blocked: users.filter(u => u.status === 'blocked').length,
    admins: users.filter(u => u.role === 'admin').length
  };

  return (
    <div className="main-content">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <p className="dashboard-subtitle">Manage users and their permissions</p>
        </div>
        <button className="btn-add-user" onClick={() => setShowAddModal(true)}>
          <HiUserAdd size={20} />
          <span>Add User</span>
        </button>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.active}</div>
          <div className="stat-label">Active</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.blocked}</div>
          <div className="stat-label">Blocked</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.admins}</div>
          <div className="stat-label">Admins</div>
        </div>
      </div>

      <div className="dashboard-search">
        <div className="search-input-wrapper">
          <HiSearch size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search users by name, username, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="user-cell">
                    <img src={user.avatar} alt={user.name} className="user-table-avatar" />
                    <div>
                      <div className="user-table-name">{user.name}</div>
                      <div className="user-table-username">@{user.username}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge role-${user.role}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge status-${user.status}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joinedDate}</td>
                <td>
                  <div className="table-actions">
                    <button
                      className="action-btn"
                      onClick={() => setShowUserMenu(showUserMenu === user.id ? null : user.id)}
                    >
                      <HiDotsVertical size={20} />
                    </button>
                    {showUserMenu === user.id && (
                      <div className="user-action-menu">
                        <div className="menu-section">
                          <div className="menu-section-title">Change Role</div>
                          <div
                            className="menu-item"
                            onClick={() => handleRoleChange(user.id, 'admin')}
                          >
                            Set as Admin
                          </div>
                          <div
                            className="menu-item"
                            onClick={() => handleRoleChange(user.id, 'moderator')}
                          >
                            Set as Moderator
                          </div>
                          <div
                            className="menu-item"
                            onClick={() => handleRoleChange(user.id, 'user')}
                          >
                            Set as User
                          </div>
                        </div>
                        <div className="menu-divider"></div>
                        <div
                          className="menu-item"
                          onClick={() => handleBlockUser(user.id)}
                        >
                          {user.status === 'blocked' ? 'Unblock User' : 'Block User'}
                        </div>
                        <div
                          className="menu-item danger"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete User
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="modal-overlay active" onClick={() => setShowAddModal(false)}>
          <div className="add-user-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add New User</h3>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-input" placeholder="Enter full name" />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-input" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-input" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select className="form-input">
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
              <button className="btn-submit" onClick={() => setShowAddModal(false)}>
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
