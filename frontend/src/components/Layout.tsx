// frontend/src/components/Layout.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 Главная' },
    { path: '/play', label: '🎮 Играть' },
    { path: '/learn', label: '📚 Обучение' },
    { path: '/tactics', label: '🧠 Тактика' },
    { path: '/analysis', label: '📊 Анализ' },
    { path: '/tournaments', label: '🏆 Турниры' },
    { path: '/community', label: '💬 Сообщество' },
    { path: '/profile', label: '👤 Профиль' }
  ];

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Cyber Header */}
      <nav className="cyber-glass fixed top-0 left-0 right-0 z-50 border-b border-neon-cyan/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold neon-text-cyan font-mono tracking-widest">
              ♚ GRANDMASTER
              <span className="text-xs block text-neon-magenta tracking-[0.3em]">ARENA</span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-mono transition-all duration-300 tracking-wider
                    ${location.pathname === item.path
                      ? 'neon-text-cyan bg-neon-cyan/10 border border-neon-cyan/30'
                      : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/5'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button className="cyber-glass p-2 rounded-lg text-neon-cyan">
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-20 px-4 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Cyber Footer */}
      <footer className="cyber-glass border-t border-neon-cyan/20 py-6 mt-auto relative z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400 font-mono tracking-wider">
          ♚ GRANDMASTER ARENA PRO © 2024 • ВСЕ ПРАВА ЗАЩИЩЕНЫ
          <span className="block text-neon-cyan/50 text-xs mt-1">⚡ POWERED BY CYBER CHESS ⚡</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;