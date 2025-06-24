import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MusicType } from '@/types/index';
import api from '../api';

interface MusicState {
    music: MusicType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MusicState = {
    music: [],
    status: 'idle',
    error: null
};

export const fetchMusic = createAsyncThunk<MusicType[], string>(
    'music/fetchMusic',
    async (query: string) => {
        const res = await api.get(
            `/search?term=${encodeURIComponent(query)}&media=music`
        );
        return res.data.results || [];
    }
);

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMusic.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                fetchMusic.fulfilled,
                (state, action: PayloadAction<MusicType[]>) => {
                    state.status = 'succeeded';
                    state.music = action.payload;
                }
            )
            .addCase(fetchMusic.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    }
});

export default musicSlice.reducer;
