import React from 'react';
import { Button } from 'react-bootstrap';
import myPropTypes from '../../../utils/propTypes.js';

const MyButton = ({ children }) => (
  <Button className="w-100 mb-3 mt-1" variant="outline-primary" type="submit">
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
