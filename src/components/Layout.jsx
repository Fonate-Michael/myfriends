import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';
import CreatePostModal from './CreatePostModal';
import { HiPencil } from 'react-icons/hi';

function Layout() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <>
      <MobileHeader />
      <div className="layout">
        <Sidebar />
        <Outlet />
        <RightSidebar />
      </div>
      <MobileNav />
      
      <button className="fab" onClick={() => setShowCreatePost(true)}>
        <HiPencil size={24} />
      </button>
      
      <CreatePostModal isOpen={showCreatePost} onClose={() => setShowCreatePost(false)} />
    </>
  );
}

export default Layout;
