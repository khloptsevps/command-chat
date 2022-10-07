import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Chat from '../components/chat/Chat.jsx';
import Loader from '../components/loader/Loader.jsx';
import routes from '../utils/routes.js';
import { initChannels } from '../slices/channelsSlice.js';
import useAuth from '../utils/hooks/useAuth.jsx';

const fetchAndInitChatData = async (getAuthHeader, dispatch, setIsLoading) => {
  try {
    const response = await axios.get(routes.dataPath(), getAuthHeader());
    dispatch(initChannels(response.data));
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

const ChatPage = () => {
  const { getAuthHeader } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAndInitChatData(getAuthHeader, dispatch, setIsLoading);
  }, []);

  return isLoading ? <Loader /> : <Chat />;
};

export default ChatPage;
