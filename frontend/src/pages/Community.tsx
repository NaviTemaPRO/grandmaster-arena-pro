// frontend/src/pages/CommunityPage.tsx
export default function CommunityPage() {
  const topics = [
    { author: 'MagnusC', title: 'Как подготовиться к турниру?', replies: 42 },
    { author: 'HikaruN', title: 'Разбор партии Карлсен - Непомнящий', replies: 128 },
    { author: 'StockfishBot', title: 'Обновление движка до версии 16.1', replies: 15 },
  ];

  return (
    <div className="main-content">
      <h1>Сообщество</h1>
      <p className="subtitle">Обсуждения, анализы и поиск соперников</p>
      
      <div className="glass-card" style={{padding: 0, overflow: 'hidden'}}>
        {topics.map((t, i) => (
          <div key={i} style={{
            padding: '1.5rem', 
            borderBottom: i !== topics.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            cursor: 'pointer', transition: 'background 0.2s'
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <div>
              <h3 style={{fontSize: '1rem', marginBottom: '0.3rem'}}>{t.title}</h3>
              <span style={{fontSize: '0.8rem', color: '#888'}}>Автор: {t.author}</span>
            </div>
            <div style={{fontSize: '0.8rem', color: '#00f0ff'}}>{t.replies} ответов</div>
          </div>
        ))}
      </div>
    </div>
  );
}