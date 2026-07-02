import React from 'react'
import { motion } from 'framer-motion'
import { TacticsTrainer } from '../components/tactics/TacticsTrainer'

const Tactics: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8">
      <h1 className="text-3xl font-bold text-white mb-4">Tactics</h1>
      <TacticsTrainer />
    </motion.div>
  )
}

export default Tactics
