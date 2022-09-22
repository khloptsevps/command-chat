import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
  type: null,
};

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpened = payload.isOpened;
      state.type = payload.type;
    },
    closeModal: (state, { payload }) => {
      state.isOpened = payload.isOpened;
      state.type = payload.type;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
