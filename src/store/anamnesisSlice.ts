import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState = {
    source: 0,
    exper: 0,
    compl: 4,
    allergy: 1,
    nsaid: 0,
    astma: 0,
    sport: 0,
    brux: 0,
    resp: 0,
    facecompl: 1,
};

type IState = typeof initialState;
export type StateFields = keyof IState;

const anamnesisSlice = createSlice({
    name: 'anamnesis',
    initialState,
   reducers: {
       setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number }>) => {
           state[action.payload.field] = action.payload.value;
       },
   },
});

export const { setField } = anamnesisSlice.actions;
export default anamnesisSlice.reducer;
