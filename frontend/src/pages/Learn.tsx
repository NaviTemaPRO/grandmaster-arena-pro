// frontend/src/pages/LearnPage.tsx
export default function LearnPage() {
  const lessons = [
    { title: 'Основы дебютов', level: 'Новичок', progress: 80 },
    { title: 'Эндшпиль: Ладья и пешка', level: 'Средний', progress: 30 },
    { title: 'Стратегия миттельшпиля', level: 'Продвинутый', progress: 0 },
  ];

  return (
    <div className="main-content">
      <h1>Центр обучения</h1>
      <p className="subtitle">Интерактивные уроки от гроссмейстеров</p>
      
      <div className="mode-grid">
        {lessons.map((l, i) => (
          <div key={i} className="glass-card" style={{padding: '1.5rem', cursor: 'pointer'}}>
            <div style={{fontSize: '0.8rem', color: '#00f0ff', marginBottom: '0.5rem'}}>{l.level}</div>
            <h3 style={{marginBottom: '1rem'}}>{l.title}</h3>
            <div style={{height: '4px', background: '#333', borderRadius: '2px'}}>
              <div style={{width: `${l.progress}%`, height: '100%', background: '#8b5cf6', borderRadius: '2px'}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}