import { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { BiSearch } from 'react-icons/bi';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const people = [
    { id: 1, name: 'Sarah Wilson', username: 'sarahw' },
    { id: 2, name: 'Mike Chen', username: 'mikechen' },
    { id: 3, name: 'Emma Davis', username: 'emmad' }
  ];

  const posts = [
    {
      id: 1,
      name: 'Tech News',
      username: 'technews',
      text: 'Breaking: New AI model released today with impressive benchmarks.',
      image: null,
      likes: 234,
      comments: 45,
      retweets: 67
    },
    {
      id: 2,
      name: 'Design Daily',
      username: 'designdaily',
      text: 'Minimalist design trends for 2025',
      image: null,
      likes: 156,
      comments: 28,
      retweets: 34
    }
  ];

  return (
    <div className="main-content">
      <div className="top-bar">Search</div>
      
      <div className="search-container">
        <div className="search-input-wrapper">
          <BiSearch size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search .friend"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="search-section">
        <div className="search-section-title">People</div>
        {people.map(person => (
          <div key={person.id} className="user-item">
            <Link to={`/profile/${person.username}`} className="user-item-link">
              <div className="avatar"></div>
              <div className="user-info">
                <div className="user-name">{person.name}</div>
                <div className="user-username">@{person.username}</div>
              </div>
            </Link>
            <button className="btn-follow-small">Follow</button>
          </div>
        ))}
      </div>

      <div className="search-section">
        <div className="search-section-title">Posts</div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Search;
