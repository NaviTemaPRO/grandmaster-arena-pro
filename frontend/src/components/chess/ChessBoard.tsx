import React, { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

interface ChessBoardProps {
  fen?: string
  isAnalysis?: boolean
  onMove?: (move: string) => void
}

export const ChessBoard: React.FC<ChessBoardProps> = ({
  fen = "start",
  isAnalysis = false,
  onMove
}) => {
  const [position, setPosition] = useState(fen)
  const [moveHistory, setMoveHistory] = useState<string[]>([])

  useEffect(() => {
    if (fen !== position) {
      setPosition(fen)
    }
  }, [fen, position])

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-[600px] mx-auto"
      >
        <div className="chess-board-placeholder bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <div className="text-center text-white/50">
            <div className="text-6xl mb-4">♔</div>
            <p>Шахматная доска</p>
            <p className="text-sm mt-2">Используйте react-chessboard для полноценной игры</p>
            <div className="grid grid-cols-8 gap-1 mt-4 max-w-[400px] mx-auto">
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8)
                const col = i % 8
                const isDark = (row + col) % 2 === 1
                return (
                  <div
                    key={i}
                    className={`aspect-square ${isDark ? "bg-gray-700" : "bg-gray-300"} rounded-sm`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ChessBoard