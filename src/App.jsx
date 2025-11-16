import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import PostDetail from './pages/PostDetail';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Bookmarks from './pages/Bookmarks';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="settings" element={<Settings />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="post/:postId" element={<PostDetail />} />
            <Route path="profile/@me" element={<Profile isOwnProfile={true} />} />
            <Route path="profile/:username" element={<Profile isOwnProfile={false} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
