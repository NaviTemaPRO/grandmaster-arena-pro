import React, { useState } from "react"

export const AntiCheatSystem: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false)

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Anti-Cheat System</h3>
      <button 
        onClick={() => setIsScanning(!isScanning)} 
        className="bg-gradient-to-r from-neon to-cyan-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all"
      >
        {isScanning ? "Scanning..." : "Scan Game"}
      </button>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl text-green-400">95%</div>
          <div className="text-xs text-white/50">Legit</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl text-yellow-400">3%</div>
          <div className="text-xs text-white/50">Suspicious</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl text-red-400">2%</div>
          <div className="text-xs text-white/50">Blocked</div>
        </div>
      </div>
    </div>
  )
}