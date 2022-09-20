import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import loginImage from '../__assets__/images/signIn.svg';
import CardContainer from '../components/cardContainer/CardContainer.jsx';
import MyImage from '../components/image/MyImage.jsx';
import useAuth from '../utils/hooks/useAuth.jsx';
import AuthForm from '../components/forms/authForm/AuthForm.jsx';

const LoginPage = () => {
  const { loggedIn } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();

  return loggedIn ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    <CardContainer>
      <Card.Body className="row p-5 pb-0">
        <MyImage imagePath={loginImage} text={t('pages.login.imageAlt')} />
        <AuthForm />
      </Card.Body>
      <Card.Footer className="p-4">
        <div className="text-center">
          <span>{t('pages.login.footer.question')}</span>
          <Link to="../signup">{t('pages.login.footer.link')}</Link>
        </div>
      </Card.Footer>
    </CardContainer>
  );
};

export default LoginPage;
