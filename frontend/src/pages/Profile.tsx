// frontend/src/pages/ProfilePage.tsx
export default function ProfilePage() {
  return (
    <div className="main-content">
      <div className="glass-card" style={{textAlign: 'center', padding: '3rem'}}>
        <div style={{
          width: '100px', height: '100px', borderRadius: '50%', 
          background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
          margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', fontWeight: 'bold'
        }}>GM</div>
        <h1>NaviTemaPRO</h1>
        <p className="subtitle">Рейтинг: 1850 ELO • Побед: 142 • Поражений: 89</p>
        
        <div className="mode-grid" style={{marginTop: '2rem'}}>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <h3 style={{color: '#00f0ff'}}>Точность</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem'}}>78%</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <h3 style={{color: '#8b5cf6'}}>Серия побед</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem'}}>5 🔥</p>
          </div>
        </div>
      </div>
    </div>
  );
}