import React from 'react'
import { motion } from 'framer-motion'
import { TournamentBracket } from '../components/tournaments/TournamentBracket'

const Tournaments: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8">
      <h1 className="text-3xl font-bold text-white mb-4">Tournaments</h1>
      <TournamentBracket />
    </motion.div>
  )
}

export default Tournaments
