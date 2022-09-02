/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState({ currentChannelId: null });
// {body: "asd", channelId: 1, username: "admin", id: 4}
const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    initChannels: (state, { payload }) => {
      channelsAdapter.addMany(state, payload.channels);
      state.currentChannelId = payload.currentChannelId;
    },
    switchChannel: (state, { payload }) => {
      state.currentChannelId = payload.newCurrentId;
    },
  },
});

export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export const { initChannels, switchChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
