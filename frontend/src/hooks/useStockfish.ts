// frontend/src/hooks/useStockfish.ts
import { useEffect, useRef, useState } from 'react';
import type { ChessInstance } from 'chess.js'; // Правильный импорт типа

interface UseStockfishProps {
  fen: string;
  difficulty: number;
  onMove: (move: string) => void;
  isPlayerTurn: boolean;
}

export const useStockfish = ({ fen, difficulty, onMove, isPlayerTurn }: UseStockfishProps) => {
  const workerRef = useRef<Worker | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker('/engine/stockfish.worker.js');

      workerRef.current.onmessage = (e) => {
        const message = e.data;
        if (typeof message === 'string' && message.startsWith('bestmove')) {
          const move = message.split(' ')[1];
          if (move && move !== '(none)') {
            onMove(move);
            setIsThinking(false);
          }
        }
      };

      workerRef.current.postMessage('uci');
      workerRef.current.postMessage('ucinewgame');
    }
  }, [onMove]);

  useEffect(() => {
    if (isPlayerTurn || !workerRef.current) return;

    setIsThinking(true);
    workerRef.current.postMessage(`position fen ${fen}`);
    workerRef.current.postMessage(`go depth ${difficulty + 5}`);
  }, [fen, isPlayerTurn, difficulty]);

  return { isThinking };
};