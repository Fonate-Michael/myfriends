import { useState, useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { HiOutlinePhotograph, HiX } from 'react-icons/hi';
import { MdOutlineGifBox } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';

function CreatePostModal({ isOpen, onClose }) {
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

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

  const handleSubmit = () => {
    // Handle post submission
    setPostText('');
    setSelectedImage(null);
    setImagePreview(null);
    onClose();
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className={`create-post-modal ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Create Post</h3>
          <IoMdClose size={24} onClick={onClose} style={{ cursor: 'pointer' }} />
        </div>

        <div className="modal-content">
          <div className="modal-post-input">
            <img src="https://i.pravatar.cc/150?img=1" alt="You" className="avatar" />
            <textarea
              className="modal-textarea"
              placeholder="What's happening?"
              rows="6"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              autoFocus
            />
          </div>

          {imagePreview && (
            <div className="image-preview-container">
              <button className="remove-image-btn" onClick={removeImage}>
                <HiX size={20} />
              </button>
              <img src={imagePreview} alt="Preview" className="image-preview" />
            </div>
          )}

          <div className="modal-post-footer">
            <div className="create-post-icons">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageSelect}
                style={{ display: 'none' }}
              />
              <HiOutlinePhotograph 
                size={22} 
                className="create-icon" 
                onClick={() => fileInputRef.current?.click()}
              />
              <MdOutlineGifBox size={22} className="create-icon" />
              <BsEmojiSmile size={20} className="create-icon" />
            </div>
            <button className="btn-post-modal" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;
