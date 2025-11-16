import { Link } from 'react-router-dom';
import { FaHeart, FaComment, FaUserPlus } from 'react-icons/fa';

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: { name: 'Jane Smith', username: 'janesmith', avatar: 'https://i.pravatar.cc/150?img=5' },
      text: 'liked your post',
      post: 'Just launched my new project!',
      time: '2h ago'
    },
    {
      id: 2,
      type: 'comment',
      user: { name: 'Alex Johnson', username: 'alexj', avatar: 'https://i.pravatar.cc/150?img=12' },
      text: 'commented on your post',
      post: 'Working on something exciting',
      time: '4h ago'
    },
    {
      id: 3,
      type: 'follow',
      user: { name: 'Sarah Wilson', username: 'sarahw', avatar: 'https://i.pravatar.cc/150?img=9' },
      text: 'started following you',
      time: '1d ago'
    },
    {
      id: 4,
      type: 'like',
      user: { name: 'Mike Chen', username: 'mikechen', avatar: 'https://i.pravatar.cc/150?img=15' },
      text: 'liked your post',
      post: 'Coffee and code. Perfect morning combo',
      time: '2d ago'
    },
    {
      id: 5,
      type: 'comment',
      user: { name: 'Emma Davis', username: 'emmad', avatar: 'https://i.pravatar.cc/150?img=20' },
      text: 'commented on your post',
      post: 'Beautiful sunset today',
      time: '3d ago'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'like':
        return <FaHeart className="notif-icon notif-like" />;
      case 'comment':
        return <FaComment className="notif-icon notif-comment" />;
      case 'follow':
        return <FaUserPlus className="notif-icon notif-follow" />;
      default:
        return null;
    }
  };

  return (
    <div className="main-content">
      <div className="top-bar">Notifications</div>
      
      <div className="notifications-list">
        {notifications.map(notif => (
          <div key={notif.id} className="notification-item">
            <div className="notif-icon-wrapper">
              {getIcon(notif.type)}
            </div>
            <Link to={`/profile/${notif.user.username}`}>
              <img src={notif.user.avatar} alt={notif.user.name} className="notif-avatar" />
            </Link>
            <div className="notif-content">
              <div className="notif-text">
                <Link to={`/profile/${notif.user.username}`} className="notif-username">
                  {notif.user.name}
                </Link>
                {' '}{notif.text}
              </div>
              {notif.post && <div className="notif-post">{notif.post}</div>}
              <div className="notif-time">{notif.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
