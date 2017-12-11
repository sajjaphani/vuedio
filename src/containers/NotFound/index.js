import React from 'react';
import Helmet from 'react-helmet';
import app from '../../config';

import './NotFound.css';

const NotFound = () => {
  const pageTitle = `404 not found - ${app.title}`;

  return (
    <div className="container">
      <Helmet title={pageTitle} />
      <div className="NotFound">
        <h1>404</h1>
        <p>This is not the web page you are looking for.</p>
      </div>
    </div>
  );
};

export default NotFound;
