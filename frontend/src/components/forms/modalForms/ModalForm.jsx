import React from 'react';
import { Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MyTextInput from '../MyTextInput.jsx';
import useModal from '../../../utils/hooks/useModal.jsx';

const ModalForm = () => {
  const { t } = useTranslation();
  const { type, handleClose } = useModal();
  return (
    <Form>
      <MyTextInput
        label={t(`pages.chat.modals.${type}.label`)}
        type="text"
        name="name"
      >
        <div className="invalid-feedback"></div>
        <div className="d-flex justify-content-end">
          <Button
            className="me-2 mt-2"
            variant="secondary"
            onClick={handleClose}
          >
            {t('pages.chat.modals.buttons.chancel')}
          </Button>
          <Button className="mt-2">
            {t('pages.chat.modals.buttons.send')}
          </Button>
        </div>
      </MyTextInput>
    </Form>
  );
};

export default ModalForm;
