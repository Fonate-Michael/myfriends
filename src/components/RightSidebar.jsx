import { Link } from 'react-router-dom';

function RightSidebar() {
  const suggestedPeople = [
    { id: 1, name: 'Sarah Wilson', username: 'sarahw', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 2, name: 'Mike Chen', username: 'mikechen', avatar: 'https://i.pravatar.cc/150?img=15' },
    { id: 3, name: 'Emma Davis', username: 'emmad', avatar: 'https://i.pravatar.cc/150?img=20' },
    { id: 4, name: 'Alex Turner', username: 'alexturner', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 5, name: 'Lisa Park', username: 'lisapark', avatar: 'https://i.pravatar.cc/150?img=25' }
  ];

  return (
    <div className="right-sidebar">
      <div className="suggested-section">
        <h3 className="suggested-title">Who to follow</h3>
        {suggestedPeople.map(person => (
          <div key={person.id} className="suggested-user">
            <Link to={`/profile/${person.username}`} className="suggested-user-link">
              <img src={person.avatar} alt={person.name} className="avatar-small" />
              <div className="suggested-user-info">
                <div className="suggested-user-name">{person.name}</div>
                <div className="suggested-user-username">@{person.username}</div>
              </div>
            </Link>
            <button className="btn-follow-small">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
