import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'formik';
import { useTranslation } from 'react-i18next';
import useModal from '../../../utils/hooks/useModal.jsx';
import MyTextInput from '../../forms/MyTextInput.jsx';

const MyForm = ({ errors, isValid, disabled }) => {
  const { t } = useTranslation();
  const { type, handleClose } = useModal();
  return (
    <Form>
      <MyTextInput
        label={t(`pages.chat.modals.${type}.label`)}
        hideLabel
        type="text"
        name="name"
        id="name"
        isInvalid={!isValid}
        className="mb-2"
        disabled={disabled}
      >
        <div className="invalid-feedback">{errors.name}</div>
        <div className="d-flex justify-content-end">
          <Button className="me-2 mt-2" variant="secondary" onClick={handleClose}>
            {t('pages.chat.modals.buttons.chancel')}
          </Button>
          <Button className="mt-2" type="submit" disabled={disabled}>
            {t('pages.chat.modals.buttons.send')}
          </Button>
        </div>
      </MyTextInput>
    </Form>
  );
};

export default MyForm;
