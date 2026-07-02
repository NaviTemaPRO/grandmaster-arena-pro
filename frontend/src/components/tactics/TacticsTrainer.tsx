import React, { useState } from "react"

export const TacticsTrainer: React.FC = () => {
  const [score, setScore] = useState(0)

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-4">Tactics Trainer</h2>
      <div className="max-w-[500px] mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <div className="text-center text-white/50">
            <div className="text-4xl mb-2">♟</div>
            <p>Puzzle #1: Mate in 1</p>
            <div className="grid grid-cols-8 gap-1 mt-4 max-w-[300px] mx-auto">
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
      </div>
      <div className="text-center mt-4 text-white/50">Score: {score}</div>
      <button 
        onClick={() => setScore(s => s + 10)} 
        className="bg-gradient-to-r from-neon to-cyan-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all mt-4 mx-auto block"
      >
        Next Puzzle
      </button>
    </div>
  )
}