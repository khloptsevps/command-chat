import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AddChannelSvg from '../../svg/AddChannelSvg.jsx';
import { openModal } from '../../../slices/modalSlice.js';
import useModal from '../../../utils/hooks/useModal.jsx';

// todo 1
// Реализуйте добавление нового канала.
// Имена каналов не должны повторяться.
// Создатель канала должен быть перемещён в добавленный канал;

// todo 2
// Реализуйте выпадающее меню с кнопками управления каналом;

// todo 3
// Реализуйте удаление канала (с подтверждением).
// Удаляться могут только вновь созданные каналы.
// При удалении канала должны удаляться и его сообщения, а пользователи,
// находящиеся в удаляемом канале, должны быть перемещены в дефолтный канал;

// todo 4
// Реализуйте переименование канала (внутри модального окна).
// Имена каналов не должны повторяться;

// todo 5
// Отправка формы в модальных окнах должна работать не только по клику по кнопке, но и при нажатии Enter;

// Имена каналов в списке должны быть с префиксом # (решетка и пробел). Например: # test channel

const ChannelsHeader = () => {
  const { t } = useTranslation();
  const { setType } = useModal();
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(openModal({ isOpened: true, type: 'addChannel' }));
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
