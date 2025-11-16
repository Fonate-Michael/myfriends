import Post from '../components/Post';

function Bookmarks() {
  const bookmarkedPosts = [
    {
      id: 1,
      name: 'Tech News',
      username: 'technews',
      avatar: 'https://i.pravatar.cc/150?img=25',
      text: 'Breaking: New AI model released today with impressive benchmarks. This could change everything.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      likes: 1234,
      comments: 156
    },
    {
      id: 2,
      name: 'Design Daily',
      username: 'designdaily',
      avatar: 'https://i.pravatar.cc/150?img=30',
      text: 'Minimalist design trends for 2025. Less is more.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      likes: 789,
      comments: 92
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      username: 'sarahw',
      avatar: 'https://i.pravatar.cc/150?img=9',
      text: 'Coffee and code. Perfect morning combo ☕️💻',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      likes: 289,
      comments: 33
    },
    {
      id: 4,
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://i.pravatar.cc/150?img=3',
      text: 'Just launched my new project! Really excited to share this with everyone. Been working on it for months. 🚀',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      likes: 342,
      comments: 28
    }
  ];

  return (
    <div className="main-content">
      <div className="top-bar">Bookmarks</div>
      
      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map(post => (
          <Post key={post.id} post={post} />
        ))
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🔖</div>
          <div className="empty-state-title">Save posts for later</div>
          <div className="empty-state-text">
            Bookmark posts to easily find them again in the future.
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
