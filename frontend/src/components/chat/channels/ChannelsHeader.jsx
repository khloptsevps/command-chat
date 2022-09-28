import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AddChannelSvg from '../../svg/AddChannelSvg.jsx';
import { openModal } from '../../../slices/modalSlice.js';
import useModal from '../../../utils/hooks/useModal.jsx';

// TODO 4
// Реализуйте переименование канала (внутри модального окна).
// Имена каналов не должны повторяться;

// TODO 5
// Отправка формы в модальных окнах должна работать не только по клику по кнопке, но и при нажатии Enter;

// Имена каналов в списке должны быть с префиксом # (решетка и пробел). Например: # test channel

const ChannelsHeader = () => {
  const { t } = useTranslation();
  const { setType } = useModal();
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(openModal({ isOpened: true, type: 'addChannel', extra: null }));
    setType('addChannel');
  };

  return (
    <Container className="d-flex justify-content-between mb-2 ps-4 pe-2 align-items-end border-bottom border-dark">
      <span className="m-0">{t('pages.chat.channels.title')}</span>
      <Button
        className="p-0 btn-group-vertical border-0"
        onClick={buttonHandler}
      >
        <AddChannelSvg />
        <span className="visually-hidden">+</span>
      </Button>
    </Container>
  );
};

export default ChannelsHeader;
