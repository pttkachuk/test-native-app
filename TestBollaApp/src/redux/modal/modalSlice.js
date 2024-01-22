import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal(state) {
            state.modalVisible = !state.modalVisible;
        },
        requestClose(state) {
            state.modalVisible = !state.modalVisible;
        }
    }
});

export const { toggleModal, requestClose } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;