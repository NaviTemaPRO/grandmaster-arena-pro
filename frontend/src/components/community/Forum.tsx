import React from "react"
import { motion } from "framer-motion"

export const Forum: React.FC = () => {
  const posts = [
    { id: "1", title: "How to beat Sicilian Defense?", author: "ChessNewbie", replies: 45, likes: 67 },
    { id: "2", title: "Tactic: Knight Fork", author: "ChessMaster", replies: 12, likes: 28 },
    { id: "3", title: "Best opening for beginners", author: "LearningChess", replies: 34, likes: 56 }
  ]

  return (
    <div className="space-y-4">
      {posts.map((post, i) => (
        <motion.div 
          key={post.id} 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: i * 0.1 }}
          className="glass rounded-xl p-4 border border-white/10 cursor-pointer hover:border-neon/50 transition-all"
        >
          <h3 className="text-lg font-bold text-white">{post.title}</h3>
          <div className="flex gap-4 mt-2 text-sm text-white/30">
            <span>{post.author}</span>
            <span>Replies: {post.replies}</span>
            <span>Likes: {post.likes}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}