import { create } from "zustand";

interface ScoreState {
    scores: {
        rank: number;
        percentile: number;
        currentScore: number;
    };
    updateScore: (newScores: { rank: number; percentile: number; currentScore: number }) => void;
}

export const useUpdateScore = create<ScoreState>((set) => ({
    scores: {
        rank: 1,
        percentile: 20,
        currentScore: 3,
    },
    updateScore: (newScores) =>
        set(() => ({
            scores: newScores,
        })),
}));
