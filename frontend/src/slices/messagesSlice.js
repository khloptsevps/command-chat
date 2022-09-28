import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { initChannels, removeChannel } from './channelsSlice.js';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messagesSlice',
  initialState,
  reducers: {
    addMessage: messagesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeChannel, (state, { payload }) => {
        const allEntities = Object.values(state.entities);
        const restEntities = allEntities.filter((e) => e.channelId !== payload);
        messagesAdapter.setAll(state, restEntities);
      })
      .addCase(initChannels, (state, { payload }) => {
        messagesAdapter.addMany(state, payload.messages);
      });
  },
});

export const messagesSelector = messagesAdapter.getSelectors(
  (state) => state.messages
);
export const { initMessages, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
