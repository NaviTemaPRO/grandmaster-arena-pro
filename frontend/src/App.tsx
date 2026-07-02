// frontend/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';       // Исправлено с HomePage
import Play from './pages/Play';       // Исправлено с PlayPage
import Learn from './pages/Learn';     // Исправлено с LearnPage
import Community from './pages/Community'; // Исправлено с CommunityPage
import Profile from './pages/Profile'; // Исправлено с ProfilePage
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;