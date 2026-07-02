import React from 'react'
import { motion } from 'framer-motion'
import { ChessBoard } from '../components/chess/ChessBoard'
import { AntiCheatSystem } from '../components/analysis/AntiCheat'

const Analysis: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8">
      <h1 className="text-3xl font-bold text-white mb-4">Analysis</h1>
      <ChessBoard />
      <div className="mt-8"><AntiCheatSystem /></div>
    </motion.div>
  )
}

export default Analysis
