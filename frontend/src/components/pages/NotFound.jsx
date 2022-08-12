import React from 'react';
import notFount from '../../images/notFound.svg';

const NotFound = () => (
  <div className="text-center">
    <img alt="Страница не найдена" className="img-fluid h-25" src={notFount} />
    <h1 className="text-muted h4">
      Страница не найдена
    </h1>
    <p className="text-muted">
      {'Но вы можете перейти '}
      <a href="/">на главную страницу</a>
    </p>
  </div>
);

export default NotFound;
