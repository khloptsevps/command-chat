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
      const copy = state;
      copy.isOpened = payload.isOpened;
      copy.type = payload.type;
      copy.extra = payload.extra;
      return copy;
    },
    closeModal: (state, { payload }) => {
      const copy = state;
      copy.isOpened = payload.isOpened;
      copy.type = payload.type;
      return copy;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
