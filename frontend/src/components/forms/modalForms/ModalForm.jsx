import React from 'react';
import { Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MyTextInput from '../MyTextInput.jsx';
import useModal from '../../../utils/hooks/useModal.jsx';
import myPropTypes from '../../../utils/propTypes.js';

const ModalForm = ({ errors, isValid }) => {
  const { t } = useTranslation();
  const { type, handleClose } = useModal();
  return (
    <Form>
      <MyTextInput
        label={t(`pages.chat.modals.${type}.label`)}
        hideLabel={true}
        type="text"
        name="name"
        id="name"
        isInvalid={!isValid}
        className="mb-2"
      >
        <div className="invalid-feedback">{errors.name}</div>
        <div className="d-flex justify-content-end">
          <Button
            className="me-2 mt-2"
            variant="secondary"
            onClick={handleClose}
          >
            {t('pages.chat.modals.buttons.chancel')}
          </Button>
          <Button className="mt-2" type="submit">
            {t('pages.chat.modals.buttons.send')}
          </Button>
        </div>
      </MyTextInput>
    </Form>
  );
};

ModalForm.propTypes = {
  errors: myPropTypes.object.isRequired,
  isValid: myPropTypes.boolean.isRequired,
};

export default ModalForm;
