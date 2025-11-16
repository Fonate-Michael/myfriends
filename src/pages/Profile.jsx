import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function Profile({ isOwnProfile }) {
  const { username } = useParams();
  const navigate = useNavigate();

  const profileData = isOwnProfile ? {
    name: 'Your Name',
    username: 'yourname',
    bio: 'Building cool things on the internet. Love design, code, and coffee.',
    avatar: 'https://i.pravatar.cc/300?img=1',
    banner: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=400&fit=crop',
    posts: [
      {
        id: 1,
        name: 'Your Name',
        username: 'yourname',
        avatar: 'https://i.pravatar.cc/150?img=1',
        text: 'This is my first post on this platform!',
        image: null,
        likes: 24,
        comments: 5
      },
      {
        id: 2,
        name: 'Your Name',
        username: 'yourname',
        avatar: 'https://i.pravatar.cc/150?img=1',
        text: 'Having a great day building cool stuff.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        likes: 18,
        comments: 3
      }
    ]
  } : {
    name: username?.replace('@', '').split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join(''),
    username: username,
    bio: 'Just another user on .friend',
    avatar: 'https://i.pravatar.cc/300?img=8',
    banner: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop',
    posts: [
      {
        id: 1,
        name: username,
        username: username,
        avatar: 'https://i.pravatar.cc/150?img=8',
        text: 'Hello from my profile!',
        image: null,
        likes: 15,
        comments: 2
      }
    ]
  };

  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="top-bar-with-back">
          <IoMdArrowBack size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
          <div>
            <div className="top-bar-title">{profileData.name}</div>
            <div className="top-bar-subtitle">{profileData.posts.length} posts</div>
          </div>
        </div>
      </div>
      
      <div className="profile-banner" style={{ backgroundImage: `url(${profileData.banner})` }}></div>
      
      <div className="profile-info">
        <div className="profile-avatar-section">
          <img src={profileData.avatar} alt={profileData.name} className="profile-avatar" />
          {isOwnProfile ? (
            <button className="btn-follow">Edit Profile</button>
          ) : (
            <button className="btn-follow">Follow</button>
          )}
        </div>
        
        <div className="profile-name">{profileData.name}</div>
        <div className="profile-username">@{profileData.username}</div>
        <div className="profile-bio">{profileData.bio}</div>
      </div>

      <div className="profile-posts">
        {profileData.posts.map(post => (
          <Post key={post.id} post={post} isOwnPost={isOwnProfile} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
