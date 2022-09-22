import React from 'react';
import { Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MyTextInput from '../MyTextInput.jsx';
import myPropTypes from '../../../utils/propTypes';

const ModalForm = ({ type, closeModal }) => {
  const { t } = useTranslation();
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
            onClick={closeModal}
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

ModalForm.propTypes = {
  closeModal: myPropTypes.func.isRequired,
  type: myPropTypes.string.isRequired,
};

export default ModalForm;