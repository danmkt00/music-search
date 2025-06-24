import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MusicType } from '@/types/index';

interface FavoritesState {
    items: MusicType[];
}

const initialState: FavoritesState = {
    items: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<MusicType>) => {
            const exists = state.items.find(
                (item) => item.trackId === action.payload.trackId
            );
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeFromFavorites: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.trackId !== action.payload
            );
        },
        clearFavorites: (state) => {
            state.items = [];
        }
    }
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
    favoritesSlice.actions;

export default favoritesSlice.reducer;
