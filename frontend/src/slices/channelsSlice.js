import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState({
  currentChannelId: null,
});
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
    addChannel: channelsAdapter.addOne,
  },
});

export const channelsSelectors = channelsAdapter.getSelectors(
  (state) => state.channels
);
export const { initChannels, switchChannel, addChannel } =
  channelsSlice.actions;

export default channelsSlice.reducer;
