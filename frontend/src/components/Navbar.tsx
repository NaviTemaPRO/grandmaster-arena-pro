// frontend/src/components/Navbar.tsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">GRANDMASTER ARENA</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Главная</NavLink>
        <NavLink to="/play" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Играть</NavLink>
        <NavLink to="/learn" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Обучение</NavLink>
        <NavLink to="/community" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Сообщество</NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Профиль</NavLink>
      </div>
    </nav>
  );
}