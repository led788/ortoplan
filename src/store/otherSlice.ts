import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {

    overbite: 1,
    spee: 1,
    seventosix: 1,
    crossr: 1,
    crossl: 1,

    //dental records
    intrusion: [],
    impact: [],
    supernum: [],
    rootres: [],
    rootresrisk: [],
    rotrec: [],
    //

    tongue: 1,
    ankylos: 1,
    sinus: 1,
    biotype: 1,
    postrestor: 1,

    //dental records
    endo: []
    //

};

type IState = typeof initialState;
export type StateFields = keyof IState;

const otherSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {
        // setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number }>) => {
        //     state[action.payload.field] = action.payload.value;
        // },

        // setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number | Array<number> }>) => {
        //     state[action.payload.field] = Array.isArray(state[action.payload.field]) ? action.payload.value : Number(action.payload.value);
        // },

        // setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number | Array<number> }>) => {
        //     if (Array.isArray(state[action.payload.field])) {
        //         return {
        //             ...state,
        //             [action.payload.field]: action.payload.value
        //         };
        //     } else {
        //         state[action.payload.field] = Number(action.payload.value);
        //     }
        // },

        setArrayField: (state, action: PayloadAction<{ field: keyof typeof state, value: Array<number> }>) => {
            // state[action.payload.field] = action.payload.value;
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        },

        setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number }>) => {
            state[action.payload.field] = action.payload.value;
        },


        // setField: (state, action: PayloadAction<{ field: keyof typeof state, value: number }>) => {
        //     state[action.payload.field] = action.payload.value;
        // },

    }
});

export const {setField, setArrayField} = otherSlice.actions;
export default otherSlice.reducer;
