import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {

    smliner: 1,
    rmlinel: 1,
    displr: 1,
    displl: 1,
    lowdispl: 1,
    midlinetip: 1,
    frontrestor: 1,
    occlcant: 1,
    antcrownl: 1,
    uincopt: 0,
    bolton: 0.0

};

type IState = typeof initialState;
export type StateFields = keyof IState;

const smileSlice = createSlice({
    name: 'smile',
    initialState,
    reducers: {
        setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number }>) => {
            state[action.payload.field] = action.payload.value;
        },

        setFieldBolton: (state, action: PayloadAction<{ field: keyof typeof state, value: string }>) => {
            state[action.payload.field] = action.payload.value;
        },
    },
});

export const {setField,setFieldBolton} = smileSlice.actions;
export default smileSlice.reducer;
