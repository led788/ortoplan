import { configureStore } from '@reduxjs/toolkit';
import anamnesisReducer from './anamnesisSlice.ts';
// import other reducers...

export const store = configureStore({
 reducer: {
   anamnesis: anamnesisReducer,

 },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch