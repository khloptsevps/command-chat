import React from 'react';
import { Nav, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import myPropTypes from '../../../utils/propTypes.js';
import { switchChannel } from '../../../slices/channelsSlice.js';
import { openModal } from '../../../slices/modalSlice.js';
import useModal from '../../../utils/hooks/useModal.jsx';

// TODO 3
// Реализуйте удаление канала (с подтверждением).
// Удаляться могут только вновь созданные каналы.
// При удалении канала должны удаляться и его сообщения, а пользователи,
// находящиеся в удаляемом канале, должны быть перемещены в дефолтный канал;

// TODO Fix buttons texts

const ChannelsItem = ({ id, name, removable }) => {
  const { setType } = useModal();
  const dispatch = useDispatch();
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId
  );
  const variant = currentChannelId === id ? 'info' : 'light';

  const handleSwitchChannel = () => {
    dispatch(switchChannel({ id }));
  };

  const removeButtonHandler = () => {
    dispatch(
      openModal({
        isOpened: true,
        type: 'removeChannel',
        extra: { currId: id },
      })
    );
    setType('removeChannel');
  };

  return !removable ? (
    <Nav.Item key={id} as="li" className="w-100">
      <Button
        variant={variant}
        className="w-100 rounded-0 text-start"
        onClick={handleSwitchChannel}
      >
        <span className="me-1">#</span>
        {name}
      </Button>
    </Nav.Item>
  ) : (
    <Nav.Item key={id} as="li" className="w-100">
      <Dropdown as={ButtonGroup} className="d-flex">
        <Button
          variant={variant}
          className="w-100 rounded-0 text-start text-truncate"
          onClick={handleSwitchChannel}
        >
          <span className="me-1">#</span>
          {name}
        </Button>
        <Dropdown.Toggle split variant={variant} />
        <Dropdown.Menu>
          <Dropdown.Item onClick={removeButtonHandler}>Удалить</Dropdown.Item>
          <Dropdown.Item>Переименовать</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav.Item>
  );
};

ChannelsItem.propTypes = {
  id: myPropTypes.number.isRequired,
  name: myPropTypes.string.isRequired,
  removable: myPropTypes.boolean.isRequired,
};

export default ChannelsItem;
