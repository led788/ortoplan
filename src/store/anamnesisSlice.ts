import {createSlice} from '@reduxjs/toolkit';

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

const anamnesisSlice = createSlice({
    name: 'anamnesis',
    initialState,
    reducers: {

        setSource: (state, action) => {
            state.source = action.payload;
        },
        setExper: (state, action) => {
            state.exper = action.payload;
        },
        setCompl: (state, action) => {
            state.compl = action.payload;
        },
        setAllergy: (state, action) => {
            state.allergy = action.payload;
        },
        setNsaid: (state, action) => {
            state.nsaid = action.payload;
        },
        setAstma: (state, action) => {
            state.astma = action.payload;
        },
        setSport: (state, action) => {
            state.sport = action.payload;
        },
        setBrux: (state, action) => {
            state.brux = action.payload;
        },
        setResp: (state, action) => {
            state.resp = action.payload;
        },
        setFacecompl: (state, action) => {
            state.facecompl = action.payload;
        },


    },
});

export const {
    setSource,
    setExper,
    setCompl,
    setAllergy,
    setNsaid,
    setAstma,
    setSport,
    setBrux,
    setResp,
    setFacecompl
} = anamnesisSlice.actions;
export default anamnesisSlice.reducer;