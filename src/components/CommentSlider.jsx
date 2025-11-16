import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function CommentSlider({ isOpen, onClose, post }) {
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const comments = [
    {
      id: 1,
      user: { name: 'Jane Smith', username: 'janesmith', avatar: 'https://i.pravatar.cc/150?img=5' },
      text: 'This is amazing! Great work 🎉',
      time: '2h ago'
    },
    {
      id: 2,
      user: { name: 'Alex Johnson', username: 'alexj', avatar: 'https://i.pravatar.cc/150?img=12' },
      text: 'Love this! Keep it up',
      time: '3h ago'
    },
    {
      id: 3,
      user: { name: 'Mike Chen', username: 'mikechen', avatar: 'https://i.pravatar.cc/150?img=15' },
      text: 'Incredible stuff here',
      time: '5h ago'
    },
    {
      id: 4,
      user: { name: 'Sarah Wilson', username: 'sarahw', avatar: 'https://i.pravatar.cc/150?img=9' },
      text: 'Really inspiring work!',
      time: '6h ago'
    },
    {
      id: 5,
      user: { name: 'Emma Davis', username: 'emmad', avatar: 'https://i.pravatar.cc/150?img=20' },
      text: 'Can\'t wait to see more from you',
      time: '8h ago'
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className={`slider-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`comment-slider ${isOpen ? 'open' : ''}`}>
        <div className="slider-header">
          <h3>Comments</h3>
          <IoMdClose size={24} onClick={onClose} style={{ cursor: 'pointer' }} />
        </div>

        <div className="slider-post-preview">
          <div className="slider-post-header">
            <img src={post?.avatar || 'https://i.pravatar.cc/150?img=1'} alt={post?.name} className="slider-post-avatar" />
            <div>
              <div className="slider-post-name">{post?.name}</div>
              <div className="slider-post-username">@{post?.username}</div>
            </div>
          </div>
          <div className="slider-post-text">{post?.text}</div>
        </div>

        <div className="slider-content">
          <div className="comments-list">
            {comments.map((comment, index) => (
              <div key={comment.id}>
                <div className="comment-item">
                  <Link to={`/profile/${comment.user.username}`} onClick={onClose}>
                    <img src={comment.user.avatar} alt={comment.user.name} className="comment-avatar" />
                  </Link>
                  <div className="comment-content">
                    <div className="comment-header">
                      <Link to={`/profile/${comment.user.username}`} className="comment-name" onClick={onClose}>
                        {comment.user.name}
                      </Link>
                      <span className="comment-username">@{comment.user.username}</span>
                      <span className="comment-time">{comment.time}</span>
                    </div>
                    <div className="comment-text">{comment.text}</div>
                  </div>
                </div>
                {index < comments.length - 1 && <div className="comment-divider"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="comment-input-section">
          <img src="https://i.pravatar.cc/150?img=1" alt="You" className="comment-avatar" />
          <div className="comment-input-wrapper">
            <input
              type="text"
              className="comment-input"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentSlider;
