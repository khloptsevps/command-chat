/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messagesSlice',
  initialState,
  reducers: {
    initMessages: (state, { payload }) => {
      messagesAdapter.addMany(state, payload.messages);
    },
    addMessage: messagesAdapter.addOne,
  },
});

export const messagesSelector = messagesAdapter.getSelectors(
  (state) => state.messages
);
export const { initMessages, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
