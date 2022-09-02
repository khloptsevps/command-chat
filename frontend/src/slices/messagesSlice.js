/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messagesSlice',
  initialState,
  reducers: {
    initMessages: (state, { payload }) => {
      // eslint-disable-next-line object-curly-newline
      // temporary for tests
      payload.messages.push({
        body: 'asd', channelId: 1, username: 'admin', id: 4,
      });
      messagesAdapter.addMany(state, payload.messages);
    },
  },
});

export const messagesSelector = messagesAdapter.getSelectors((state) => state.messages);
export const { initMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
