/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import storage from '../utils/storage.js';
import Chat from '../components/chat/Chat.jsx';
import Loader from '../components/loader/Loader.jsx';
import routes from '../utils/routes.js';
import { initChannels } from '../slices/channelsSlice.js';
import { initMessages } from '../slices/messagesSlice.js';

const ChatPage = () => {
  const { username, token } = storage.getItemData();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAndInitChatData = async (userToken) => {
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      try {
        const response = await axios.get(routes.dataPath(), config);
        dispatch(initChannels(response.data));
        dispatch(initMessages(response.data));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAndInitChatData(token);
  }, [dispatch]);

  return (
    isLoading
      ? <Loader />
      : <Chat />
  );
};

export default ChatPage;
