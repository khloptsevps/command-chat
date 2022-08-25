import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.svg';

const NotFound = () => {
  const text = 'Но вы можете перейти ';
  return (
    <div className="text-center">
      <img alt="страница не найдена" className="img-fluid h-25" src={notFound} />
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p className="text-muted">
        {text}
        <Link to="/">на главную страницу</Link>
      </p>
    </div>
  );
};

export default NotFound;
