import { configureStore } from '@reduxjs/toolkit';
import anamnesisReducer from './anamnesisSlice.ts';
// import other reducers...

export const store = configureStore({
 reducer: {
   anamnesis: anamnesisReducer,

 },
});
