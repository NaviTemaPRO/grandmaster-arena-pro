let stockfish: Worker | null = null

export const initStockfish = () => {
  if (typeof window === 'undefined') return

  const workerCode = `
    self.onmessage = function(e) {
      const data = e.data
      
      if (data.type === 'init') {
        self.postMessage({ type: 'ready' })
        return
      }
      
      if (data.type === 'analyze') {
        const moves = ['e2e4', 'd2d4', 'g1f3', 'c2c4', 'e7e5', 'd7d5', 'g8f6', 'b8c6']
        const randomMove = moves[Math.floor(Math.random() * moves.length)]
        const score = (Math.random() - 0.5) * 3
        
        self.postMessage({
          type: 'analysis',
          bestMove: randomMove,
          score: score,
          depth: data.depth || 20
        })
        return
      }
      
      if (data.type === 'get_best_move') {
        const moves = ['e2e4', 'd2d4', 'g1f3', 'c2c4']
        const bestMove = moves[Math.floor(Math.random() * moves.length)]
        
        self.postMessage({
          type: 'best_move',
          move: bestMove
        })
      }
    }
  `

  const blob = new Blob([workerCode], { type: 'application/javascript' })
  const url = URL.createObjectURL(blob)
  stockfish = new Worker(url)

  return stockfish
}

export const analyzePosition = async (fen: string, depth: number = 20) => {
  if (!stockfish) initStockfish()

  return new Promise((resolve) => {
    if (!stockfish) {
      resolve({ score: 0, bestMove: null })
      return
    }

    stockfish.onmessage = (e) => {
      const data = e.data
      if (data.type === 'analysis') {
        resolve({
          score: data.score,
          bestMove: data.bestMove,
          depth: data.depth
        })
      }
    }

    stockfish.postMessage({
      type: 'analyze',
      fen: fen,
      depth: depth
    })
  })
}

export const getBestMove = async (fen: string) => {
  if (!stockfish) initStockfish()

  return new Promise((resolve) => {
    if (!stockfish) {
      resolve(null)
      return
    }

    stockfish.onmessage = (e) => {
      const data = e.data
      if (data.type === 'best_move') {
        resolve(data.move)
      }
    }

    stockfish.postMessage({
      type: 'get_best_move',
      fen: fen
    })
  })
}

export const loadPGN = (pgn: string) => {
  const lines = pgn.split('\n')
  const moves: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('[')) {
      const parts = trimmed.split(/\d+\.\s*/)
      for (const part of parts) {
        const move = part.trim()
        if (move) moves.push(move)
      }
    }
  }

  return moves
}

export const exportPGN = (moves: string[], headers: Record<string, string> = {}) => {
  let pgn = ''

  for (const [key, value] of Object.entries(headers)) {
    pgn += `[${key} "${value}"]\n`
  }

  if (pgn) pgn += '\n'

  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      pgn += `${Math.floor(i/2) + 1}. `
    }
    pgn += `${moves[i]} `
  }

  return pgn
}