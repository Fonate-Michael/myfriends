import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { FaRegComment, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, fetch based on postId
  const post = {
    id: postId,
    name: 'John Doe',
    username: 'johndoe',
    text: 'Just launched my new project! Really excited to share this with everyone. Been working on it for months. 🚀',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    likes: 342,
    comments: 28,
    timestamp: '2h ago'
  };

  const replies = [
    {
      id: 1,
      name: 'Jane Smith',
      username: 'janesmith',
      text: 'Congrats! This looks amazing 🎉',
      likes: 12,
      comments: 2,
      timestamp: '1h ago'
    },
    {
      id: 2,
      name: 'Alex Johnson',
      username: 'alexj',
      text: 'Well done! Can\'t wait to try it out.',
      likes: 8,
      comments: 1,
      timestamp: '45m ago'
    }
  ];

  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="top-bar-with-back">
          <IoMdArrowBack size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
          <div className="top-bar-title">Post</div>
        </div>
      </div>

      <div className="post-detail">
        <div className="post-detail-header">
          <Link to={`/profile/${post.username}`}>
            <div className="avatar"></div>
          </Link>
          <div className="post-detail-user">
            <Link to={`/profile/${post.username}`} className="post-name-link">
              <div className="post-name">{post.name}</div>
              <div className="post-username">@{post.username}</div>
            </Link>
          </div>
        </div>

        <div className="post-detail-content">
          <div className="post-detail-text">{post.text}</div>
          {post.image && (
            <img src={post.image} alt="Post" className="post-detail-image" />
          )}
          <div className="post-detail-timestamp">{post.timestamp}</div>
        </div>

        <div className="post-detail-stats">
          <div className="stat-item">
            <span className="stat-number">{post.comments}</span>
            <span className="stat-label">Comments</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{post.likes}</span>
            <span className="stat-label">Likes</span>
          </div>
        </div>

        <div className="post-detail-actions">
          <div className="post-action">
            <FaRegComment size={20} />
          </div>
          <div className="post-action">
            <FaRegHeart size={20} />
          </div>
          <div className="post-action">
            <FaRegBookmark size={20} />
          </div>
        </div>
      </div>

      <div className="post-detail-reply-section">
        <div className="post-detail-reply-input">
          <img src="https://i.pravatar.cc/150?img=1" alt="You" className="avatar" />
          <div className="post-detail-input-wrapper">
            <input
              type="text"
              className="post-detail-input"
              placeholder="Post your reply..."
            />
          </div>
        </div>
      </div>

      <div className="replies-section">
        {replies.map(reply => (
          <div key={reply.id} className="post">
            <Link to={`/profile/${reply.username}`}>
              <div className="avatar"></div>
            </Link>
            <div className="post-content">
              <div className="post-header">
                <Link to={`/profile/${reply.username}`} className="post-name-link">
                  <span className="post-name">{reply.name}</span>
                  <span className="post-username">@{reply.username}</span>
                </Link>
                <span className="post-timestamp">{reply.timestamp}</span>
              </div>
              <div className="post-text">{reply.text}</div>
              <div className="post-actions">
                <div className="post-action">
                  <FaRegComment size={18} />
                  <span>{reply.comments}</span>
                </div>
                <div className="post-action">
                  <FaRegHeart size={18} />
                  <span>{reply.likes}</span>
                </div>
                <div className="post-action">
                  <FaRegBookmark size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetail;
