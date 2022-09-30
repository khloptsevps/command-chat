import React from 'react';
import { Button } from 'react-bootstrap';
import myPropTypes from '../../utils/propTypes.js';

const MyButton = ({ children, ...props }) => (
  <Button {...props} variant="outline-primary" type="submit">
    {children}
  </Button>
);

MyButton.defaultProps = {
  children: 'Текст кнопки',
};

MyButton.propTypes = {
  children: myPropTypes.children,
};

export default MyButton;
