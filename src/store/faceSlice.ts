import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {

    faceasymm: 1,
    lips: 1,
    chin: 1,
    vertical: 1,
    growth: 0,

};

type IState = typeof initialState;
export type StateFields = keyof IState;

const faceSlice = createSlice({
    name: 'face',
    initialState,
    reducers: {
        setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number }>) => {
            state[action.payload.field] = action.payload.value;
        },
    },
});

export const {setField} = faceSlice.actions;
export default faceSlice.reducer;
