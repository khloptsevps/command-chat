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
      const newState = state;
      newState.currentChannelId = payload.currentChannelId;
      return newState;
    },
    switchChannel: (state, { payload }) => {
      const newState = state;
      newState.currentChannelId = payload.id;
      return newState;
    },
    addChannel: channelsAdapter.addOne,
    removeChannel: (state, { payload }) => {
      const newState = state;
      if (state.currentChannelId === payload) {
        newState.currentChannelId = 1;
      }
      channelsAdapter.removeOne(newState, payload);
      return newState;
    },
    renameChannel: (state, { payload }) => {
      const changes = { id: payload.id, changes: { ...payload } };
      channelsAdapter.updateOne(state, changes);
    },
  },
});

export const channelsSelectors = channelsAdapter.getSelectors((state) => state.channels);
export const {
  initChannels,
  switchChannel,
  addChannel,
  removeChannel,
  renameChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;
