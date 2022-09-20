import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import notFound from '../__assets__/images/notFound.svg';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid h-100">
      <div className="d-flex justify-content-center align-content-center h-100">
        <div className="text-center">
          <img
            alt="страница не найдена"
            className="img-fluid h-25"
            src={notFound}
          />
          <h1 className="h4 text-muted">{t('pages.notFound.title')}</h1>
          <p className="text-muted">
            {t('pages.notFound.text')}
            <Link to="/">{t('pages.notFound.link')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
