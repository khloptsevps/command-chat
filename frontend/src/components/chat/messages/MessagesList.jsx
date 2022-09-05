import React from 'react';
import { useSelector } from 'react-redux';
import { channelsSelectors } from '../../../slices/channelsSlice.js';
import { messagesSelector } from '../../../slices/messagesSlice.js';
import MessagesHeader from './MessagesHeader.jsx';
import MessagesItem from './MessagesItem.jsx';

const MessagesList = () => {
  const channels = useSelector(channelsSelectors.selectAll);
  const messages = useSelector(messagesSelector.selectAll);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const currentChannel = channels.find((channel) => channel.id === currentChannelId);
  const currenChannelMessages = messages
    .filter((message) => message.channelId === currentChannelId);
  return (
    <>
      <MessagesHeader title={currentChannel.name} length={currenChannelMessages.length} />
        <div id="messages-box" className="chat-messages overflow-auto px-5">
          {currenChannelMessages.length > 0 && currenChannelMessages.map((message) => (
            <MessagesItem key={message.id} body={message.body} username={message.username} />
          ))}
        </div>
    </>
  );
};

export default MessagesList;
