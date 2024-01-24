import {configureStore} from '@reduxjs/toolkit';
import anamnesisReducer from './anamnesisSlice.ts';
import faceReducer from './faceSlice.ts';
import smileReducer from './smileSlice.ts'
import tmjReducer from './tmjSlice.ts'
import otherReducer from './otherSlice.ts'

export const store = configureStore({
    reducer: {
        anamnesis: anamnesisReducer,
        face: faceReducer,
        smile: smileReducer,
        tmj: tmjReducer,
        other: otherReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch