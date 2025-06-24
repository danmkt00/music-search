import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './features/musicSlice';
import favoritesReducer from './features/favoritesSlice';

export const store = configureStore({
    reducer: {
        music: musicReducer,
        favorites: favoritesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
