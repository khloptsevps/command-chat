import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useModal from '../../../utils/hooks/useModal.jsx';

const RemoveForm = (props) => {
  const { variant, disabled, onClick } = props;
  const { t } = useTranslation();
  const { handleClose } = useModal();
  return (
    <>
      <p>{t('pages.chat.modals.removeChannel.message')}</p>
      <div className="d-flex justify-content-end">
        <Button onClick={handleClose} variant="secondary" className="me-2">
          {t('pages.chat.modals.buttons.chancel')}
        </Button>
        <Button variant={variant} disabled={disabled} onClick={onClick}>
          {t('pages.chat.modals.buttons.remove')}
        </Button>
      </div>
    </>
  );
};

export default RemoveForm;
