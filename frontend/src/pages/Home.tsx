// frontend/src/pages/HomePage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  if (isAuth) {
    return (
      <div className="main-content">
        <div className="glass-card">
          <h1>Добро пожаловать!</h1>
          <p className="subtitle">Вы успешно зарегистрировались. Теперь вы можете начать игру или изучить материалы.</p>
          <button className="primary-btn" onClick={() => navigate('/play')}>Перейти к игре</button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="glass-card">
        <header>
          <h1>Grandmaster Arena</h1>
          <p className="subtitle">Профессиональная шахматная платформа нового поколения. Присоединяйтесь к элите.</p>
        </header>

        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setIsAuth(true); }}>
          <div className="input-group"><input type="email" placeholder="Email адрес" required /></div>
          <div className="input-group"><input type="password" placeholder="Придумайте пароль" required /></div>
          <button type="submit" className="primary-btn">Создать аккаунт</button>
        </form>

        <div className="divider">или войдите через</div>
        <button className="secondary-btn" style={{width: '100%'}}>Google / GitHub</button>
      </div>
    </div>
  );
}