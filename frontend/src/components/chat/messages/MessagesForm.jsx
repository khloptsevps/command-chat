import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../utils/hooks/useAuth.jsx';
import SendButton from './formElements/SendButton.jsx';
import InputMessage from './formElements/InputMessage.jsx';
import useSocket from '../../../utils/hooks/useSocket.jsx';

const MessagesForm = () => {
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const { username } = useAuth();
  const socketApi = useSocket();
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = async (v, { resetForm }) => {
    const message = {
      ...v,
      channelId,
      username,
    };
    try {
      setIsDisabled(true);
      await socketApi.addNewMessage(message);
      resetForm();
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(false);
    }
  };

  return (
    <Formik initialValues={{ body: '' }} onSubmit={onSubmit}>
      <div className="mt-auto px-5 py-3">
        <Form noValidate className="py-1 border rounded-2">
          <div className="input-group has-validation">
            <InputMessage name="body" disabled={isDisabled} />
            <SendButton />
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default MessagesForm;
