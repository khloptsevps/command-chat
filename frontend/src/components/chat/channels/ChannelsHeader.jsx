/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import myPropTypes from '../../../utils/propTypes';
import AddChannelSvg from '../../svg/AddChannelSvg.jsx';
import { openModal } from '../../../slices/modalSlice';

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

const ChannelsHeader = ({ title }) => {
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(openModal({ isOpened: true, type: 'addChannel' }));
  };
  return (
    <Container className="d-flex justify-content-between mb-2 ps-4 pe-2 align-items-end border-bottom border-dark">
      <span className="m-0">{title}</span>
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

ChannelsHeader.defaultProps = {
  title: 'Ваше название',
};

ChannelsHeader.propTypes = {
  title: myPropTypes.string,
};

export default ChannelsHeader;
