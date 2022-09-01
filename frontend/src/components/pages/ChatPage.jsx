/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import storage from '../../utils/storage.js';
import Chat from '../chat/Chat.jsx';
import Loader from '../loader/Loader.jsx';
import routes from '../../utils/routes.js';

const ChatPage = () => {
  const { username, token } = storage.getItemData();
  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    const fetchChatData = async (userToken) => {
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios.get(routes.dataPath(), config);
      setChatData(response.data);
    };
    fetchChatData(token);
  }, []);

  return (
    !chatData
      ? <Loader />
      : <Chat />
  );
};

export default ChatPage;
