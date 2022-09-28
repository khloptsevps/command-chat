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
      state.currentChannelId = payload.id;
    },
    addChannel: channelsAdapter.addOne,
    removeChannel: (state, { payload }) => {
      if (state.currentChannelId === payload) {
        state.currentChannelId = 1;
      }
      channelsAdapter.removeOne(state, payload);
    },
  },
});

export const channelsSelectors = channelsAdapter.getSelectors(
  (state) => state.channels
);
export const { initChannels, switchChannel, addChannel, removeChannel } =
  channelsSlice.actions;

export default channelsSlice.reducer;
