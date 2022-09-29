import React from 'react';
import { Nav, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import myPropTypes from '../../../utils/propTypes.js';
import { switchChannel } from '../../../slices/channelsSlice.js';
import { openModal } from '../../../slices/modalSlice.js';
import useModal from '../../../utils/hooks/useModal.jsx';

const ChannelsItem = ({ id, name, removable }) => {
  const { t } = useTranslation();
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

  const renameButtonHandler = () => {
    dispatch(
      openModal({
        isOpened: true,
        type: 'renameChannel',
        extra: { currId: id },
      })
    );
    setType('renameChannel');
  };

  return (
    <Nav.Item key={id} as="li" className="w-100">
      {!removable ? (
        <Button
          variant={variant}
          className="w-100 rounded-0 text-start"
          onClick={handleSwitchChannel}
        >
          <span className="me-1">#</span>
          {name}
        </Button>
      ) : (
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
            <Dropdown.Item onClick={removeButtonHandler}>
              {t('pages.chat.channels.buttons.remove')}
            </Dropdown.Item>
            <Dropdown.Item onClick={renameButtonHandler}>
              {t('pages.chat.channels.buttons.rename')}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Nav.Item>
  );
};

ChannelsItem.propTypes = {
  id: myPropTypes.number.isRequired,
  name: myPropTypes.string.isRequired,
  removable: myPropTypes.boolean.isRequired,
};

export default ChannelsItem;
