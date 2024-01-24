import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {

    tmjcomplaint: 1,
    pain: 1,
    mdbdev: 1,
    clicksr: 1,
    clicksl: 1,
    open: 40,
    condrct: 1,
    condlct: 1,
    condresorpt: 1

};

type IState = typeof initialState;
export type StateFields = keyof IState;

const tmjSlice = createSlice({
    name: 'tmj',
    initialState,
    reducers: {
        setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number }>) => {
            state[action.payload.field] = action.payload.value;
        },
    },
});

export const {setField} = tmjSlice.actions;
export default tmjSlice.reducer;
