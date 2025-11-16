import { useState } from 'react';
import Post from '../components/Post';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { MdOutlineGifBox } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';

function Home() {
  const [postText, setPostText] = useState('');

  const posts = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://i.pravatar.cc/150?img=3',
      text: 'Just launched my new project! Really excited to share this with everyone. Been working on it for months. 🚀',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      likes: 342,
      comments: 28
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      avatar: 'https://i.pravatar.cc/150?img=5',
      text: 'Beautiful sunset today 🌅',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      likes: 528,
      comments: 45
    },
    {
      id: 3,
      name: 'Alex Johnson',
      username: 'alexj',
      avatar: 'https://i.pravatar.cc/150?img=12',
      text: 'Working on something exciting. Stay tuned!',
      image: null,
      likes: 167,
      comments: 22
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      username: 'sarahw',
      avatar: 'https://i.pravatar.cc/150?img=9',
      text: 'Coffee and code. Perfect morning combo ☕️💻',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      likes: 289,
      comments: 33
    },
    {
      id: 5,
      name: 'Mike Chen',
      username: 'mikechen',
      avatar: 'https://i.pravatar.cc/150?img=15',
      text: 'New blog post is live! Check out my thoughts on modern web development and the future of JavaScript frameworks.',
      image: null,
      likes: 456,
      comments: 67
    },
    {
      id: 6,
      name: 'Emma Davis',
      username: 'emmad',
      avatar: 'https://i.pravatar.cc/150?img=20',
      text: 'Nature walk this morning. Feeling refreshed and ready for the week! 🌲',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      likes: 612,
      comments: 41
    },
    {
      id: 7,
      name: 'Tech News',
      username: 'technews',
      avatar: 'https://i.pravatar.cc/150?img=25',
      text: 'Breaking: New AI model released today with impressive benchmarks. This could change everything.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      likes: 1234,
      comments: 156
    },
    {
      id: 8,
      name: 'Design Daily',
      username: 'designdaily',
      avatar: 'https://i.pravatar.cc/150?img=30',
      text: 'Minimalist design trends for 2025. Less is more.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      likes: 789,
      comments: 92
    }
  ];

  return (
    <div className="main-content">
      <div className="top-bar">Home</div>
      
      <div className="create-post">
        <div className="create-post-content">
          <img src="https://i.pravatar.cc/150?img=1" alt="You" className="avatar" />
          <div className="create-post-input">
            <textarea
              className="textarea"
              placeholder="What's happening?"
              rows="3"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <div className="create-post-footer">
              <div className="create-post-icons">
                <HiOutlinePhotograph size={20} className="create-icon" />
                <MdOutlineGifBox size={20} className="create-icon" />
                <BsEmojiSmile size={18} className="create-icon" />
              </div>
              <button className="btn-post">Post</button>
            </div>
          </div>
        </div>
      </div>

      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
