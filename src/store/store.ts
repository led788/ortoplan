import {configureStore} from '@reduxjs/toolkit';
import anamnesisReducer from './anamnesisSlice.ts';
import faceReducer from './faceSlice.ts';

export const store = configureStore({
    reducer: {
        anamnesis: anamnesisReducer,
        face: faceReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch