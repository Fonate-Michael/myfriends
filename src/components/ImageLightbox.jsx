import { IoMdClose } from 'react-icons/io';
import { FaRegComment, FaRegHeart, FaRegBookmark } from 'react-icons/fa';

function ImageLightbox({ isOpen, onClose, image, post }) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <IoMdClose size={32} />
        </button>
        
        <div className="lightbox-content">
          <div className="lightbox-image-wrapper">
            <img src={image} alt="Post" className="lightbox-image" />
          </div>
          
          <div className="lightbox-actions">
            <div className="post-action">
              <FaRegComment size={24} />
              <span>{post?.comments || 0}</span>
            </div>
            <div className="post-action">
              <FaRegHeart size={24} />
              <span>{post?.likes || 0}</span>
            </div>
            <div className="post-action">
              <FaRegBookmark size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLightbox;
