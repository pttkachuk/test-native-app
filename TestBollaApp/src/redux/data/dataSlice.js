import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    code: '',
    image: '',
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addPhoto(state, { payload }) {
            state.image = payload.image;
        },
        addCode(state, { payload }) {
            state.code = payload.code;
        },
        clearData(state) {
            state.code = '';
            state.image = '';
        },
    },
});

export const { addCode, addPhoto, clearData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;