import { useFormikContext } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import SendButtonSvg from '../../../../__assets__/svg/SendButtonSvg.jsx';

const SendButton = () => {
  const { t } = useTranslation();
  const { dirty, isValid } = useFormikContext();
  return (
    <Button
      type="submit"
      size="sm"
      className="m-1"
      disabled={!(dirty && isValid)}
    >
      <SendButtonSvg />
      <span className="visually-hidden">
        {t('pages.chat.messages.form.button')}
      </span>
    </Button>
  );
};

export default SendButton;
