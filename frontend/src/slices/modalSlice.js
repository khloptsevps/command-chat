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
      const newState = state;
      newState.isOpened = true;
      newState.type = payload.type;
      newState.extra = payload.extra;
      return newState;
    },
    closeModal: (state) => {
      const newState = state;
      newState.isOpened = false;
      return newState;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
