import React from 'react';
import { Card } from 'react-bootstrap';
import signUpImage from '../__assets__/svg/signUp.svg';
import CardContainer from '../components/cardContainer/CardContainer.jsx';
import MyImage from '../components/image/MyImage.jsx';
import SignUp from '../components/forms/SignUp.jsx';

const SignUpPage = () => (
  <CardContainer>
    <Card.Body className="row p-5 pb-0">
      <MyImage imagePath={signUpImage} text="registration" />
      <SignUp />
    </Card.Body>
  </CardContainer>
);

export default SignUpPage;
