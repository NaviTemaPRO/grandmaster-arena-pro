import React from 'react'

export const TournamentBracket: React.FC = () => {
  const players = ['Grandmaster', 'ChessMaster', 'QueenSlayer', 'KnightRider']

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-4">Grandmaster Cup 2024</h2>
      <div className="space-y-2">
        {players.map((p, i) => (
          <div key={i} className="glass rounded-xl p-3 border border-white/10 flex justify-between">
            <span className="text-white">{p}</span>
            <span className="text-white/30">#{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
