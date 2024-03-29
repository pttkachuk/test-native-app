import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    code: '',
    image: '',
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addPhoto(state, actions) {
            state.image = actions.payload;
        },
        addCode(state, actions) {
            state.code = actions.payload;
        },
        clearData(state) {
            state.code = '';
            state.image = '';
        },
    },
});

export const { addCode, addPhoto, clearData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;