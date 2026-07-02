import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export const RatingSystem: React.FC = () => {
  const data = [
    { date: 'Jan', rating: 2500 },
    { date: 'Feb', rating: 2550 },
    { date: 'Mar', rating: 2600 },
    { date: 'Apr', rating: 2650 }
  ]

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <h3 className="text-sm text-white/50">Rating</h3>
      <div className="text-4xl font-bold text-white">2650</div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="rgba(255,255,255,0.1)" />
          <YAxis stroke="rgba(255,255,255,0.1)" />
          <Tooltip />
          <Line type="monotone" dataKey="rating" stroke="#00F0FF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
