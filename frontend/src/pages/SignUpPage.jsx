/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import signUpImage from '../__assets__/images/signUp.svg';
import CardContainer from '../components/cardContainer/CardContainer.jsx';
import MyImage from '../components/image/MyImage.jsx';
import SignUp from '../components/forms/SignUp.jsx';

const SignUpPage = () => {
  const test = 1;
  return (
    <CardContainer>
      <Card.Body className="row p-5 pb-0">
        <MyImage imagePath={signUpImage} text="registration" />
        <SignUp />
      </Card.Body>
    </CardContainer>
  );
};

export default SignUpPage;
