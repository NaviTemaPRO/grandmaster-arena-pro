import React from 'react'
import { motion } from 'framer-motion'

export const VideoLibrary: React.FC = () => {
  const videos = [
    { id: '1', title: 'Chess Strategy Basics', author: 'ChessCoach', duration: '15:00' },
    { id: '2', title: 'Tactics: Double Attack', author: 'TacticsMaster', duration: '12:30' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map((v, i) => (
        <motion.div key={v.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className="glass rounded-xl p-4 border border-white/10 cursor-pointer">
          <div className="aspect-video bg-cosmic rounded-lg mb-3 flex items-center justify-center text-4xl">Video</div>
          <h3 className="font-bold text-white">{v.title}</h3>
          <div className="text-sm text-white/30 mt-2">{v.author} - {v.duration}</div>
        </motion.div>
      ))}
    </div>
  )
}
