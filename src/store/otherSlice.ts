import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {

    overbite: 1,
    spee: 1,
    seventosix: 1,
    crossr: 1,
    crossl: 1,

    intrusion: [],
    impact: [],
    supernum: [],
    rootres: [],
    rootresrisk: [],
    rotrec: [],

    tongue: 1,
    ankylos: 1,
    sinus: 1,
    biotype: 1,
    postrestor: 1,

    endo: [],

    //dental formula
    impnow_up: [],
    extu_up: [],
    extspace_up: [],

    impnow_down: [],
    extu_down: [],
    extspace_down: [],

    //

};

type NumberFields = {
    overbite: number;
    spee: number;
    seventosix: number;
    crossr: number;
    crossl: number;
    tongue: number;
    ankylos: number;
    sinus: number;
    biotype: number;
    postrestor: number;
};

type ArrayFields = {
    intrusion: Array<number>;
    impact: Array<number>;
    supernum: Array<number>;
    rootres: Array<number>;
    rootresrisk: Array<number>;
    rotrec: Array<number>;
    endo: Array<number>;

    // dental formula
    impnow_up: Array<number>;
    extu_up: Array<number>;
    extspace_up: Array<number>;

    impnow_down: Array<number>;
    extu_down: Array<number>;
    extspace_down: Array<number>;
};

type IState = typeof initialState;
export type StateFields = keyof IState;

const otherSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {

        setArrayField: (state, action: PayloadAction<{ field: keyof ArrayFields, value: Array<number> }>) => {
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        },

        setField: (state, action: PayloadAction<{ field: keyof NumberFields, value: number }>) => {
            state[action.payload.field] = action.payload.value;
        },

    }
});

export const {setField, setArrayField} = otherSlice.actions;
export default otherSlice.reducer;
