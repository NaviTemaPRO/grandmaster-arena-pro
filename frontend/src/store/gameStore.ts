import { create } from 'zustand'

interface GameState {
  currentGame: any
  isPlaying: boolean
  opponent: string | null
  timeControl: { initial: number; increment: number }
  setGame: (game: any) => void
  setPlaying: (playing: boolean) => void
  setOpponent: (opponent: string) => void
}

export const useGameStore = create<GameState>((set) => ({
  currentGame: null,
  isPlaying: false,
  opponent: null,
  timeControl: { initial: 600, increment: 5 },
  setGame: (game) => set({ currentGame: game }),
  setPlaying: (playing) => set({ isPlaying: playing }),
  setOpponent: (opponent) => set({ opponent })
}))