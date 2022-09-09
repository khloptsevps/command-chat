import { useFormikContext } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import SendButtonSvg from '../../../svg/SendButtonSvg.jsx';
import myPropTypes from '../../../../utils/propTypes';

const SendButton = () => {
  const { dirty, isValid } = useFormikContext();
  return (
    <Button
      type="submit"
      size="sm"
      className="m-1"
      disabled={!(dirty && isValid)}
    >
      <SendButtonSvg />
      <span className="visually-hidden">Отправить</span>
    </Button>
  );
};

SendButton.propTypes = {
  isDisabled: myPropTypes.boolean,
};

export default SendButton;
