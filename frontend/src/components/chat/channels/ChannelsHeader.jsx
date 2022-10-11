import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AddChannelSvg from '../../../__assets__/svg/AddChannelSvg.jsx';
import { openModal } from '../../../slices/modalSlice.js';

const ChannelsHeader = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(openModal({ type: 'addChannel' }));
  };

  return (
    <Container className="d-flex justify-content-between mb-2 ps-4 pe-2 align-items-end border-bottom border-dark">
      <span className="m-0">{t('pages.chat.channels.title')}</span>
      <Button className="p-0 btn-group-vertical border-0" onClick={buttonHandler}>
        <AddChannelSvg />
        <span className="visually-hidden">+</span>
      </Button>
    </Container>
  );
};

export default ChannelsHeader;
