# myfriends

A modern, minimalist social media platform built with React. Clean dark mode UI with green accents, inspired by X (Twitter).

> **Note:** This is the frontend-only implementation. Backend integration coming soon.

## Features

### Core Functionality
- **Authentication** - Login and signup pages with clean form design
- **Home Feed** - Scrollable feed with posts, images, and interactions
- **Create Posts** - Floating action button with modal for creating posts with image upload
- **Post Interactions** - Like, comment, and bookmark posts
- **Comments** - Slide-in comment panel with smooth animations
- **Image Lightbox** - Full-screen image viewer with interactions
- **User Profiles** - Profile pages with banner, avatar, bio, and posts
- **Search** - Search for people and posts
- **Notifications** - Activity feed for likes, comments, and follows
- **Bookmarks** - Save posts for later viewing
- **Settings** - Account settings and logout

### Design Features
- **Dark Mode** - Pure black (#000) background with light grey borders
- **Green Accent** - #00ff88 brand color throughout
- **Grand Hotel Font** - Elegant cursive logo typography
- **Minimal UI** - No gradients, glows, or fancy effects - just clean design
- **Responsive** - Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations** - Polished transitions and interactions

### Mobile Features
- **Bottom Navigation** - Easy thumb-friendly navigation
- **Floating Action Button** - Quick access to create posts
- **Slide-up Modals** - Native-feeling mobile interactions
- **Optimized Layout** - Compact design for small screens

### Advanced Features
- **Post Menu** - Edit/delete own posts, mute/block/report others
- **Comment Slider** - Right-side panel with post preview and comments
- **User Menu** - Profile dropdown with logout in sidebar and header
- **Image Upload** - Select and preview images before posting
- **Click-to-Navigate** - Smart click handling for posts and profiles

## Tech Stack

- **React 19** - Latest React with hooks
- **React Router DOM** - Client-side routing
- **React Icons** - HeroIcons for consistent iconography
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with modern features (backdrop-filter, etc.)

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Fonate-Michael/myfriends.git
cd myfriends
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── CommentSlider.jsx
│   ├── CreatePostModal.jsx
│   ├── ImageLightbox.jsx
│   ├── Layout.jsx
│   ├── Login.jsx
│   ├── MobileHeader.jsx
│   ├── MobileNav.jsx
│   ├── Post.jsx
│   ├── RightSidebar.jsx
│   ├── Sidebar.jsx
│   └── Signup.jsx
├── pages/              # Page components
│   ├── Bookmarks.jsx
│   ├── Home.jsx
│   ├── Notifications.jsx
│   ├── PostDetail.jsx
│   ├── Profile.jsx
│   ├── Search.jsx
│   └── Settings.jsx
├── App.jsx             # Main app component
├── App.css             # Global styles
└── main.jsx            # Entry point
```

## Routes

- `/signin` - Login page
- `/signup` - Signup page
- `/home` - Home feed
- `/search` - Search page
- `/notifications` - Notifications feed
- `/bookmarks` - Saved posts
- `/settings` - Account settings
- `/profile/@me` - Your profile
- `/profile/:username` - User profile
- `/post/:postId` - Post detail page

## Design System

### Colors
- **Background:** #000 (Pure Black)
- **Borders:** #2B2B2B (Light Grey)
- **Accent:** #00ff88 (Green)
- **Text:** #fff (White)
- **Secondary Text:** #888 (Grey)
- **Danger:** #ff4444 (Red)

### Typography
- **Logo:** Grand Hotel (Cursive)
- **Body:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, etc.)

### Spacing
- Consistent 4px grid system
- Border radius: 4px (buttons), 8px (cards), 12px (modals), 50% (avatars)

## Future Enhancements

- Backend API integration
- Real-time updates with WebSockets
- Direct messaging
- Stories/Reels
- Advanced search filters
- Trending topics
- User verification badges
- Dark/Light theme toggle
- Multiple image uploads
- Video support
- Emoji picker
- GIF integration

## Contributing

This is a frontend-only project. Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning or building your own social media platform.

## Author

**Fonate Michael**
- GitHub: [@Fonate-Michael](https://github.com/Fonate-Michael)

---

Built with ❤️ using React and Vite
