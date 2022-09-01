/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const channelsSlice = createSlice({
  name: 'messagesSlice',
  initialState,
});

export default channelsSlice.reducer;
