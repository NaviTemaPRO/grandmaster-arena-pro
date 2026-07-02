// frontend/src/pages/Play.tsx
import { useNavigate } from 'react-router-dom';

export default function Play() {
  const navigate = useNavigate();

  const modes = [
    { id: 'blitz', icon: '⚡', title: 'Блиц 3+0', desc: 'Быстрая партия против Stockfish 16' },
    { id: 'rapid', icon: '⏳', title: 'Рапид 10+5', desc: 'Классический контроль времени' },
    { id: 'zen', icon: '🧘', title: 'Дзен-режим', desc: 'Без таймера. Только вы и доска' },
    { id: 'puzzle', icon: '🧩', title: 'Тактика', desc: 'Решайте задачи на мат в 1-3 хода' },
  ];

  return (
    <div className="main-content">
      <h1>Выберите режим игры</h1>
      <p className="subtitle">Сразитесь с нейросетью или проверьте свои знания тактики</p>

      <div className="mode-grid">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className="mode-btn"
            onClick={() => navigate(`/game/${mode.id}`)}
          >
            <div className="mode-icon">{mode.icon}</div>
            <div className="mode-info">
              <h3>{mode.title}</h3>
              <p>{mode.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}