import { useState, useCallback, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Chess } from 'chess.js';
import type { Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useUserStore } from '../store/userStore';
import { useStockfish } from '../hooks/useStockfish';

export default function GameRoom() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const updateStats = useUserStore((s) => s.updateStats);

  const [game, setGame] = useState(new Chess());
  const [playerColor, setPlayerColor] = useState<'w' | 'b'>('w');
  const [gameOver, setGameOver] = useState<{winner: 'white' | 'black' | 'draw', reason: string} | null>(null);
  const [isEngineReady, setIsEngineReady] = useState(false);

  const difficulty = useMemo(() => {
    if (mode === 'blitz') return 8;
    if (mode === 'rapid') return 12;
    return 15;
  }, [mode]);

  useEffect(() => {
    setTimeout(() => setIsEngineReady(true), 500);
  }, []);

  const makeAMove = useCallback((move: string) => {
    try {
      const gameCopy = new Chess(game.fen());
      const result = gameCopy.move({
        from: move.slice(0, 2) as Square,
        to: move.slice(2, 4) as Square,
        promotion: 'q'
      });

      if (result) {
        setGame(gameCopy);
        checkGameOver(gameCopy);
      }
    } catch (e) {
      console.error('Invalid move from engine:', e);
    }
  }, [game]);

  // frontend/src/pages/GameRoom.tsx

const checkGameOver = (currentGame: Chess) => {
  if (currentGame.isCheckmate()) {
    // Приводим ход к строке для безопасного сравнения
    const winner = currentGame.turn() === 'w' ? 'black' : 'white';
    setGameOver({ winner, reason: 'Мат' });
    updateStats((winner as string) === (playerColor as string) ? 'win' : 'loss');
  } else if (currentGame.isDraw() || currentGame.isStalemate()) {
    setGameOver({ winner: 'draw', reason: 'Ничья' });
    updateStats('draw');
  }
};

  const onDrop = (sourceSquare: Square, targetSquare: Square) => {
    if (gameOver || game.turn() !== playerColor) return false;

    try {
      const gameCopy = new Chess(game.fen());
      const move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });

      if (move) {
        setGame(gameCopy);
        checkGameOver(gameCopy);
        return true;
      }
    } catch {
      return false;
    }
    return false;
  };

  const { isThinking } = useStockfish({
    fen: game.fen(),
    difficulty,
    onMove: makeAMove,
    isPlayerTurn: game.turn() === playerColor
  });

  if (!isEngineReady) {
    return (
      <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <div className="glass-card">
          <h1>Загрузка Stockfish 18...</h1>
          <p className="subtitle">Подготовка нейросети к партии</p>
        </div>
      </div>
    );
  }

  if (gameOver) {
  return (
    <div className="main-content">
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <h1>Партия завершена!</h1>
        <p className="subtitle">
          {gameOver.reason}. Победитель:{' '}
          {gameOver.winner === 'draw'
            ? 'Ничья'
            : (gameOver.winner as string) === (playerColor as string)
              ? 'Вы'
              : 'Stockfish'}
        </p>
        <button className="primary-btn" onClick={() => navigate('/profile')}>
          В профиль
        </button>
        <button
          className="secondary-btn"
          style={{ marginLeft: '1rem' }}
          onClick={() => navigate('/play')}
        >
          Новая игра
        </button>
      </div>
    </div>
  );
}

  return (
    <div className="main-content">
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h1>{mode?.toUpperCase()} vs Stockfish 18</h1>
          <span style={{ color: isThinking ? '#00f0ff' : '#888' }}>
            {isThinking ? '🤖 Думает...' : 'Ваш ход'}
          </span>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Chessboard
            position={game.fen()}
            onPieceDrop={onDrop}
            boardOrientation={playerColor === 'w' ? 'white' : 'black'}
            customBoardStyle={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)' }}
            customDarkSquareStyle={{ backgroundColor: '#2C241B' }}
            customLightSquareStyle={{ backgroundColor: '#E8E3D9' }}
          />
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="secondary-btn" onClick={() => { setGame(new Chess()); setGameOver(null); }}>Сдаться / Новая партия</button>
        </div>
      </div>
    </div>
  );
}