// frontend/src/store/userStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStats {
  rating: number;
  wins: number;
  losses: number;
  draws: number;
  gamesPlayed: number;
}

interface UserStore {
  stats: UserStats;
  updateStats: (result: 'win' | 'loss' | 'draw') => void;
  resetStats: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      stats: {
        rating: 1200, // Стартовый рейтинг
        wins: 0,
        losses: 0,
        draws: 0,
        gamesPlayed: 0,
      },
      updateStats: (result) => set((state) => {
        let ratingChange = 0;
        if (result === 'win') ratingChange = 15;
        if (result === 'loss') ratingChange = -12;
        if (result === 'draw') ratingChange = 2;

        return {
          stats: {
            ...state.stats,
            rating: Math.max(0, state.stats.rating + ratingChange),
            wins: result === 'win' ? state.stats.wins + 1 : state.stats.wins,
            losses: result === 'loss' ? state.stats.losses + 1 : state.stats.losses,
            draws: result === 'draw' ? state.stats.draws + 1 : state.stats.draws,
            gamesPlayed: state.stats.gamesPlayed + 1,
          },
        };
      }),
      resetStats: () => set({
        stats: { rating: 1200, wins: 0, losses: 0, draws: 0, gamesPlayed: 0 },
      }),
    }),
    { name: 'grandmaster-stats' } // Ключ для localStorage
  )
);