// frontend/src/hooks/useChessGame.ts
import { create } from 'zustand';
import { Chess } from 'chess.js';

interface GameState {
  game: Chess;
  fen: string;
  history: string[];
  isThinking: boolean;
  makeMove: (from: string, to: string) => void;
  undoMove: () => void;
}

export const useChessGame = create<GameState>((set) => ({
  game: new Chess(),
  fen: 'start',
  history: [],
  isThinking: false,

  makeMove: (from, to) => {
    set((state) => {
      try {
        const move = state.game.move({ from, to, promotion: 'q' });
        if (!move) return state;
        
        // Эмуляция ответа ИИ (замените на Stockfish Worker в будущем)
        setTimeout(() => {
          const moves = state.game.moves();
          if (moves.length > 0 && !state.game.isGameOver()) {
            const randomMove = moves[Math.floor(Math.random() * moves.length)];
            state.game.move(randomMove);
            set({ fen: state.game.fen(), history: [...state.history, randomMove] });
          }
        }, 800);

        return { 
          fen: state.game.fen(), 
          history: [...state.history, move.san],
          isThinking: true 
        };
      } catch { return state; }
    });
  },

  undoMove: () => set((state) => {
    state.game.undo();
    state.game.undo();
    return { fen: state.game.fen(), history: state.history.slice(0, -2) };
  })
}));