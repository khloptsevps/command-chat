import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../__assets__/images/notFound.svg';

const NotFoundPage = () => (
  <div className="container-fluid h-100">
    <div className="d-flex justify-content-center align-content-center h-100">
      <div className="text-center">
        <img alt="страница не найдена" className="img-fluid h-25" src={notFound} />
        <h1 className="h4 text-muted">Страница не найдена</h1>
        <p className="text-muted">
          {'Но вы можете перейти '}
          <Link to="/">на главную страницу</Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
