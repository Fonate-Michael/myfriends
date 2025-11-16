import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegComment, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import CommentSlider from './CommentSlider';
import ImageLightbox from './ImageLightbox';

function Post({ post, showFullPost = false, isOwnPost = false }) {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const handlePostClick = (e) => {
    if (e.target.closest('.post-action') || e.target.closest('.profile-link') || e.target.closest('.post-image') || e.target.closest('.post-menu-btn') || e.target.closest('.post-menu')) {
      return;
    }
    navigate(`/post/${post.id}`);
  };

  const handleCommentClick = (e) => {
    e.stopPropagation();
    setShowComments(true);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setShowLightbox(true);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleMenuAction = (action) => {
    console.log(`Action: ${action} on post ${post.id}`);
    setShowMenu(false);
  };

  return (
    <>
      <div className="post" onClick={handlePostClick}>
        <Link to={`/profile/${post.username}`} className="profile-link" onClick={(e) => e.stopPropagation()}>
          <img src={post.avatar || 'https://i.pravatar.cc/150?img=1'} alt={post.name} className="avatar" />
        </Link>
        <div className="post-content">
          <div className="post-header">
            <Link 
              to={`/profile/${post.username}`} 
              className="post-name-link profile-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="post-name">{post.name}</span>
              <span className="post-username">@{post.username}</span>
            </Link>
            <div className="post-menu-container" ref={menuRef}>
              <button className="post-menu-btn" onClick={handleMenuClick}>
                <HiDotsHorizontal size={20} />
              </button>
              {showMenu && (
                <div className="post-menu">
                  {isOwnPost ? (
                    <>
                      <div className="post-menu-item" onClick={() => handleMenuAction('edit')}>
                        Edit
                      </div>
                      <div className="post-menu-item danger" onClick={() => handleMenuAction('delete')}>
                        Delete
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="post-menu-item" onClick={() => handleMenuAction('mute')}>
                        Mute @{post.username}
                      </div>
                      <div className="post-menu-item" onClick={() => handleMenuAction('block')}>
                        Block @{post.username}
                      </div>
                      <div className="post-menu-item danger" onClick={() => handleMenuAction('report')}>
                        Report post
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="post-text">{post.text}</div>
          {post.image && (
            <img 
              src={post.image} 
              alt="Post" 
              className="post-image" 
              onClick={handleImageClick}
            />
          )}
          <div className="post-actions">
            <div className="post-action" onClick={handleCommentClick}>
              <FaRegComment size={18} />
              <span>{post.comments}</span>
            </div>
            <div className="post-action" onClick={(e) => e.stopPropagation()}>
              <FaRegHeart size={18} />
              <span>{post.likes}</span>
            </div>
            <div className="post-action" onClick={(e) => e.stopPropagation()}>
              <FaRegBookmark size={18} />
            </div>
          </div>
        </div>
      </div>

      <CommentSlider 
        isOpen={showComments} 
        onClose={() => setShowComments(false)} 
        post={post}
      />

      {post.image && (
        <ImageLightbox 
          isOpen={showLightbox} 
          onClose={() => setShowLightbox(false)} 
          image={post.image}
          post={post}
        />
      )}
    </>
  );
}

export default Post;
