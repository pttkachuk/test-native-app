import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
};

export const exitModalSlice = createSlice({
    name: 'exitModal',
    initialState,
    reducers: {
        toggleExitModal(state) {
            state.modalVisible = !state.modalVisible;
        },
        requestExitModalCLose(state) {
            state.modalVisible = !state.modalVisible;
        },
        closeExitModal(state) {
            state.modalVisible = false;
        },
    }
});

export const { toggleExitModal, requestExitModalCLose, closeExitModal } = exitModalSlice.actions;
export const exitModalReducer = exitModalSlice.reducer;