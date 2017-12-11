import React from 'react';
import Helmet from 'react-helmet';
import app from '../../config';

const About = () => {
  const pageTitle = `About - ${app.title}`;
  return (
    <div className="container">
      <Helmet title={pageTitle} />
      <h1>About</h1>
      <p>Coming soon.</p>
    </div>
  );
};

export default About;
