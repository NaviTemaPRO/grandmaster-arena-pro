// frontend/src/components/HUD.tsx
import { motion } from 'framer-motion';
import { useChessGame } from '../hooks/useChessGame';

export default function HUD() {
  const { history, undoMove, isThinking } = useChessGame();

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <motion.div
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="glass-panel"
        style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', padding: '10px 30px', pointerEvents: 'auto' }}
      >
        <span className="kinetic-text">GRANDMASTER ARENA</span>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        className="glass-panel"
        style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', padding: 20, display: 'flex', flexDirection: 'column', gap: 10, pointerEvents: 'auto' }}
      >
        <button onClick={undoMove} style={{ background: 'transparent', border: '1px solid #00F0FF', color: '#00F0FF', padding: '10px', borderRadius: 8, cursor: 'pointer' }}>
          ↺ Undo Move
        </button>
        <div style={{ color: '#888', fontSize: '0.8rem' }}>
          Status: {isThinking ? 'Stockfish Thinking...' : 'Your Turn'}
        </div>
        <div style={{ maxHeight: 200, overflowY: 'auto', fontSize: '0.9rem' }}>
          {history.map((m, i) => <div key={i}>{i+1}. {m}</div>)}
        </div>
      </motion.div>
    </div>
  );
}