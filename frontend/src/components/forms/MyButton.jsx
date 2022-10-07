import React from 'react';
import { Button } from 'react-bootstrap';

const MyButton = ({ children, ...props }) => (
  <Button {...props} variant="outline-primary" type="submit">
    {children}
  </Button>
);

MyButton.defaultProps = {
  children: 'Текст кнопки',
};

export default MyButton;
